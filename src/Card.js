import React from "react";

function Card({ title, content, resources, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border border-gray-300 rounded-lg shadow-lg p-4 bg-white cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{content}</p>
      <div className="space-y-2">
        {resources && resources.length > 0 && (
          <div>
            <h4 className="font-semibold text-lg mb-1">Resources:</h4>
            <ul className="list-disc list-inside space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    <strong>{resource.name}:</strong> {resource.description}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
