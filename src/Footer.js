import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-50 text-white p-4 flex justify-end items-center">
      <a
        href="https://codetracker-gpt.netlify.app/" // Replace with your actual URL
  
        rel="noopener noreferrer"
        className="inline-block mr-10" 
      >
        <img
          src="/extension-logo.png" // Ensure this is the correct path
          alt="Bouncing"
          className="h-20 w-20 animate-bounce" // Tailwind classes for size and animation
        />
      </a>
    </footer>
  );
}

export default Footer;
