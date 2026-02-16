import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import GenericPage from './GenericPage';
import PlacementSidebar from './PlacementSidebar';
import IQACSidebar from './IQACSidebar';
import AdmissionsSidebar from './AdmissionsSidebar';
import FacilitiesSidebar from './FacilitiesSidebar';
import ResearchSidebar from './ResearchSidebar';
import LibrarySidebar from './LibrarySidebar';
import HostelSidebar from './HostelSidebar';
import SportsSidebar from './SportsSidebar';
import DocumentsSidebar from './DocumentsSidebar';
import EditableText from './admin/EditableText';
import EditableImage from './admin/EditableImage';
import EditableSection from './admin/EditableSection';
import { useEdit } from '../contexts/EditContext';

// Map pageId prefixes to their sidebar components
const SIDEBAR_MAP = {
  'placements-': PlacementSidebar,
  'iqac-': IQACSidebar,
  'admissions-': AdmissionsSidebar,
  'facilities-library-': LibrarySidebar,
  'facilities-hostel-': HostelSidebar,
  'facilities-sports-': SportsSidebar,
  'facilities-': FacilitiesSidebar,
  'research-': ResearchSidebar,
  'documents-': DocumentsSidebar,
};

const GenericContentPage = ({ pageId }) => {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isEditing, data } = useEdit(); // Use data from context if editing

  // Use live data from context if available/editing, otherwise fetched page
  const displayPage = (isEditing && data && data.sections) ? data : page;
  const sections = displayPage?.sections || [];

  useEffect(() => {
    const fetchPageData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/pages/${pageId}`);

        if (res.data.success) {
          setPage(res.data.data);
          setError(null);
        } else {
          setError(res.data.message || 'Page not found');
        }
      } catch (err) {
        console.error('[GenericContentPage] Error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pageId) {
      fetchPageData();
    }
  }, [pageId]);

  // Auto-select sidebar based on pageId prefix (longer prefixes checked first)
  const sidebar = useMemo(() => {
    if (!pageId) return null;
    const sortedPrefixes = Object.keys(SIDEBAR_MAP).sort((a, b) => b.length - a.length);
    for (const prefix of sortedPrefixes) {
      if (pageId.startsWith(prefix)) {
        const SidebarComponent = SIDEBAR_MAP[prefix];
        // Pass sections to sidebar to allow for in-page navigation (sub-menus)
        return <SidebarComponent sections={displayPage?.sections} />;
      }
    }
    return null;
  }, [pageId, displayPage]);

  if (loading && !displayPage) {
    return (
      <GenericPage title="Loading..." sidebar={sidebar}>
        <div className="flex justify-center p-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-ssgmce-orange"></div>
        </div>
      </GenericPage>
    );
  }

  if (error || !displayPage) {
    return (
      <GenericPage title="Page Not Found" sidebar={sidebar}>
        <div className="text-center text-red-500 p-8">
          {error || 'Content not available.'}
        </div>
      </GenericPage>
    );
  }

  return (
    <GenericPage title={displayPage.pageTitle}>
      <div className={`flex flex-col lg:flex-row gap-8 ${sidebar ? '' : 'justify-center'}`}>
        {/* Sidebar */}
        {sidebar && (
          <div className="lg:w-1/4 flex-shrink-0">
            <div className="sticky top-24">
              {sidebar}
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className={sidebar ? "lg:w-3/4" : "w-full"}>
          {/* Page Title - Editable */}
          {isEditing ? (
            <div className="mb-4">
              <label className="text-xs text-gray-400">Page Title</label>
              <EditableText
                path="pageTitle"
                element="h1"
                className="text-3xl font-bold text-gray-900 border-b pb-2 mb-4"
              />
            </div>
          ) : null}

          <div className="space-y-8">
            {sections.sort((a, b) => a.order - b.order).map((section, index) => (
              <EditableSection key={section.sectionId} index={index} title={section.type}>
                <div className="page-section" id={section.sectionId}>
                  {/* Section Title */}
                  {section.title && section.title !== 'Intro' && section.title !== displayPage.pageTitle && (
                    <EditableText
                      value={section.title}
                      path={`sections[${index}].title`}
                      element="h3"
                      className="text-2xl font-bold text-ssgmce-orange mb-4 pb-2 border-b border-gray-200"
                    />
                  )}

                  {/* Text Section */}
                  {section.type === 'text' && (
                    <div className="prose max-w-none text-gray-700 whitespace-pre-wrap">
                      <EditableText
                        value={section.content.text}
                        path={`sections[${index}].content.text`}
                        multiline={true}
                      />
                    </div>
                  )}

                  {/* RichText Section (Treated as text for now, should use a WYSIWYG later) */}
                  {section.type === 'richtext' && (
                    <div className="prose max-w-none text-gray-700">
                      <div dangerouslySetInnerHTML={{ __html: section.content.text }} />
                      {isEditing && <p className="text-xs text-red-400 mt-1">* Rich text editing not fully supported in inline mode yet.</p>}
                    </div>
                  )}

                  {/* Stats Section */}
                  {section.type === 'stats' && section.content.stats && (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {section.content.stats.map((stat, idx) => (
                        <div key={idx} className={`bg-white rounded-lg shadow p-4 text-center border-t-4 ${stat.color === 'orange' ? 'border-ssgmce-orange' : 'border-ssgmce-blue'}`}>
                          <div className={`text-2xl font-bold ${stat.color === 'orange' ? 'text-ssgmce-orange' : 'text-ssgmce-blue'}`}>{stat.value}</div>
                          <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Timeline Section */}
                  {section.type === 'timeline' && section.content.events && (
                    <div className="relative border-l-2 border-ssgmce-blue ml-4 space-y-6">
                      {section.content.events.map((event, idx) => (
                        <div key={idx} className="relative pl-8">
                          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-ssgmce-orange border-2 border-white shadow"></div>
                          <div className="bg-gray-50 rounded-lg p-4 shadow-sm">
                            <span className="text-sm font-bold text-ssgmce-blue">{event.year}</span>
                            <h4 className="font-semibold text-gray-900">{event.title}</h4>
                            {event.description && <p className="text-sm text-gray-600 mt-1">{event.description}</p>}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Cards Section */}
                  {section.type === 'cards' && section.content.cards && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.content.cards.map((card, idx) => (
                        <div key={idx} className={`bg-white rounded-lg shadow p-5 border-l-4 ${card.color === 'orange' ? 'border-ssgmce-orange' : 'border-ssgmce-blue'}`}>
                          <h4 className="font-bold text-gray-900 mb-1">{card.title}</h4>
                          <p className="text-sm text-gray-600">{card.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Table Section */}
                  {section.type === 'table' && section.content.headers && section.content.rows && (
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200 border">
                        <thead className="bg-ssgmce-blue text-white">
                          <tr>
                            {section.content.headers.map((h, idx) => (
                              <th key={idx} className="px-4 py-3 text-left text-sm font-semibold">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {section.content.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="px-4 py-3 text-sm text-gray-700">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Accordion Section */}
                  {section.type === 'accordion' && section.content.items && (
                    <div className="space-y-2">
                      {section.content.items.map((item, idx) => (
                        <details key={idx} className="bg-white border rounded-lg shadow-sm group">
                          <summary className="px-4 py-3 cursor-pointer font-medium text-gray-900 hover:bg-gray-50 list-none flex justify-between items-center">
                            {item.title}
                            <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                          </summary>
                          <div className="px-4 py-3 text-gray-700 border-t text-sm">
                            {item.html ? <div dangerouslySetInnerHTML={{ __html: item.html }} /> : item.content}
                          </div>
                        </details>
                      ))}
                    </div>
                  )}

                  {/* PDF Section */}
                  {section.type === 'pdf' && section.content.url && (
                    <div className="my-4">
                      <a href={section.content.url} target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-ssgmce-blue text-white rounded hover:bg-blue-800 transition">
                        📄 {section.content.label || 'View PDF Document'}
                      </a>
                    </div>
                  )}

                  {/* List Section */}
                  {section.type === 'list' && (
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {section.content.items?.map((item, idx) => (
                        <li key={idx}>
                          <EditableText
                            value={item}
                            path={`sections[${index}].content.items[${idx}]`}
                            element="span"
                          />
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Image Section */}
                  {section.type === 'image' && (
                    <figure className="my-6">
                      <EditableImage
                        value={section.content.url}
                        path={`sections[${index}].content.url`}
                        className="rounded-lg max-w-full h-auto shadow-md mx-auto"
                        alt={section.content.alt || section.title}
                      />
                      {section.content.caption && (
                        <figcaption className="text-sm text-gray-500 mt-2 text-center italic">
                          <EditableText
                            value={section.content.caption}
                            path={`sections[${index}].content.caption`}
                            element="span"
                          />
                        </figcaption>
                      )}
                    </figure>
                  )}

                  {/* Link Section */}
                  {section.type === 'link' && (
                    <div className="my-4">
                      <EditableText
                        value={section.content.url}
                        path={`sections[${index}].content.url`}
                        className="text-blue-600 hover:text-blue-800 underline font-medium block"
                      />
                    </div>
                  )}
                </div>
              </EditableSection>
            ))}

            {!sections.length && <p className="text-gray-500 italic text-center py-8">
              {isEditing ? "No content. Add sections via dashboard." : "No content details available."}
            </p>}
          </div>
        </div>
      </div>
    </GenericPage>
  );
};

export default GenericContentPage;
