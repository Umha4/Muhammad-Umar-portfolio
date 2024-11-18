import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectSection = () => (
  <section className="py-20 bg-gray-50 text-gray-900 overflow-x-hidden max-w-screen-2xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-blue-900">My Projects</h2>
      <p className="text-lg mt-4 text-gray-600">
        A showcase of some of the projects I've developed, from full-stack applications to creative front-end designs.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
      {[1, 2, 3, 4, 5, 6].map((project) => (
        <div
          key={project}
          className="rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 bg-white"
        >
          {/* Project Image */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={`/projects/project${project}.jpg`} // Example path, replace with actual image paths
              alt={`Project ${project}`}
              layout="fill"
              objectFit="cover"
              className="hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Project Details */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-blue-800">Project {project}</h3>
            <p className="mt-3 text-gray-700">
              Brief description of the project, its functionality, and technologies used.
            </p>
            <Link href={`/projects/${project}`}>
              <p className="block mt-4 text-blue-500 hover:underline">View Details</p>
            </Link>
          </div>
        </div>
      ))}
    </div>

    {/* Explore More Button */}
    <div className="text-center mt-12">
      <Link href="/projects">
        <p className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-200 transform hover:scale-105 mt-10 inline-block">
          Explore More
        </p>
      </Link>
    </div>
  </section>
);

export default ProjectSection;
