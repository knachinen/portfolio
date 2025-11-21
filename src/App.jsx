import React, { useState, useEffect } from 'react'; // Ensure useEffect is imported
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Effect to manage body scrolling
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden'; // Disable body scroll
    } else {
      document.body.style.overflow = 'unset'; // Re-enable body scroll
    }
    // Cleanup function to ensure scroll is re-enabled if component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]); // Re-run effect when selectedProject changes

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <ProjectList onProjectSelect={handleProjectSelect} />
      </main>
      <Footer />

      {selectedProject && (
        <ProjectDetail project={selectedProject} onClose={handleCloseDetail} />
      )}
    </div>
  );
}

export default App;
