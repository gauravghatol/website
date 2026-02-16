import React, { useEffect, useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import axios from 'axios';
import { EditProvider } from '../../contexts/EditContext';
import GenericContentPage from '../../components/GenericContentPage';
import AdminToolbar from '../../components/admin/AdminToolbar';
import { FaSpinner } from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';
import { ADMIN_ROUTE_PREFIX } from '../../config/adminAccess';
import Electrical from '../../pages/departments/Electrical';
import CSE from '../../pages/departments/CSE';
import Mechanical from '../../pages/departments/Mechanical';
import EnTC from '../../pages/departments/EnTC';
import IT from '../../pages/departments/IT';
import MBA from '../../pages/departments/MBA';
import AppliedSciences from '../../pages/departments/AppliedSciences';

// Map User-model department codes → the pageId the coordinator owns
const DEPT_TO_PAGEID = {
  CSE: 'departments-cse',
  IT: 'departments-it',
  MECH: 'departments-mechanical',
  ELECTRICAL: 'departments-electrical',
  ENTC: 'departments-entc',
  MBA: 'departments-mba',
  ASH: 'departments-applied-sciences',
};

const VisualPageEditor = () => {
  const { pageId } = useParams();
  const { isCoordinator, userDepartment } = useAuth();
  const [initialData, setInitialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Coordinators may only edit their own department page
  if (isCoordinator && userDepartment !== 'All') {
    const allowed = DEPT_TO_PAGEID[userDepartment];
    if (!allowed || pageId !== allowed) {
      return <Navigate to={ADMIN_ROUTE_PREFIX} replace />;
    }
  }

  useEffect(() => {
    const fetchPageData = async () => {
      if (!pageId) return;

      setLoading(true);
      try {
        const res = await axios.get(`/api/pages/${pageId}`);
        if (res.data.success) {
          setInitialData(res.data.data);
        } else {
          setError(res.data.message || 'Page not found');
        }
      } catch (err) {
        console.error('Error fetching page for editor:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPageData();
  }, [pageId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <FaSpinner className="animate-spin text-4xl text-blue-600 mx-auto mb-4" />
          <p className="text-gray-500">Loading editor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <a href="/admin" className="text-blue-600 hover:underline">Back to Dashboard</a>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (initialData?.template === 'department') {
      switch (initialData?.pageId) {
        case 'departments-electrical': return <Electrical />;
        case 'departments-cse': return <CSE />;
        case 'departments-mechanical': return <Mechanical />;
        case 'departments-entc': return <EnTC />;
        case 'departments-it': return <IT />;
        case 'departments-mba': return <MBA />;
        case 'departments-applied-sciences': return <AppliedSciences />;
        default: return <GenericContentPage pageId={pageId} />;
      }
    }
    return <GenericContentPage pageId={pageId} />;
  };

  return (
    <EditProvider initialData={initialData} pageId={pageId}>
      {/* 
        We render the toolbar OUTSIDE the content flow so it overlays.
        This preserves the exact CSS of the page.
      */}
      <AdminToolbar title={initialData?.pageTitle} />

      <div className="pb-20"> {/* Add padding at bottom so toolbar doesn't cover footer */}
        {renderContent()}
      </div>
    </EditProvider>
  );
};

export default VisualPageEditor;
