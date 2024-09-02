import { useState } from "react";
import "./index.css";
import Card from "./Card";
import NavBar from "./NavBar";
import Footer from "./Footer";

const cardData = [
  {
    id: 1,
    title: "DSA",
    content: "Data Structures and Algorithms",
    resources: [
      {
        name: "Striver's A2Z SDE Sheet",
        url: "https://takeuforward.org/strivers-a2z-dsa-course/",
        description: "A comprehensive guide covering all DSA topics, designed by Striver. Perfect for beginners and for interview preparation.",
      },
      {
        name: "LeetCode Top 150",
        url: "https://leetcode.com/studyplan/top-interview-150/",
        description: "A curated list of the top 150 problems frequently asked in technical interviews, available on LeetCode.",
      },
      {
        name: "Ninjas SDE Sheet",
        url: "https://www.naukri.com/code360/problem-lists/ninjas-sde-sheet",
        description: "A structured sheet focusing on SDE interview preparation, provided by Coding Ninjas, with problem links and explanations.",
      },
      {
        name: "Love Babbar's DSA Sheet",
        url: "https://drive.google.com/file/d/1Y-Qe4NnfLVzZ2pKQ7Iwx5m_KHfeG2a9n/view",
        description: "A popular DSA sheet by Love Babbar, known for its comprehensive list of 450 important problems that cover a wide array of DSA topics.",
      },
      {
        name: "Theory Concepts - GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/data-structures/",
        description: "GeeksforGeeks provides in-depth articles and tutorials on every DSA topic, with theory and code examples.",
      },
      {
        name: "Love Babbar's YouTube Channel",
        url: "https://www.youtube.com/channel/UCQHLxxBFrbfdrk1jF0moTpw",
        description: "A YouTube channel by Love Babbar offering video tutorials on DSA, interview tips, and conceptual explanations.",
      },
      {
        name: "CodeChef for Competitions",
        url: "https://www.codechef.com/",
        description: "A competitive programming platform offering various contests to practice and improve your DSA and coding skills.",
      },
      {
        name: "LeetCode for Competitions",
        url: "https://leetcode.com/contest/",
        description: "LeetCode provides regular coding contests with a wide range of DSA problems, helping to prepare for real-time coding interviews.",
      },
    ],
  },
  {
    id: 2,
    title: "OS",
    content: "Operating Systems",
    resources: [
      {
        name: "Love Babbar's One-Shot OS Video",
        url: "https://www.youtube.com/watch?v=3obEP8eLsCw&t=102s",
        description: "A concise one-shot video by Love Babbar covering key concepts of Operating Systems, perfect for quick revision before interviews.",
      },
      {
        name: "GeeksforGeeks OS Tutorials",
        url: "https://www.geeksforgeeks.org/operating-systems/",
        description: "Comprehensive tutorials and articles on various OS topics, including processes, scheduling, memory management, and more.",
      },
      {
        name: "InterviewBit OS",
        url: "https://www.interviewbit.com/operating-system-interview-questions/",
        description: "A collection of frequently asked OS interview questions with detailed explanations, ideal for technical interview preparation.",
      },
      {
        name: "Apna College OS Notes",
        url: "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl",
        description: "Lecture series from Apna College, providing an in-depth understanding of OS concepts, tailored for beginners and students.",
      },
      {
        name: "Gate Smashers OS Lectures",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",
        description: "A detailed video lecture series by Gate Smashers, covering all major topics of Operating Systems in a structured and clear manner.",
      },
      {
        name: "Neso Academy OS Tutorials",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O",
        description: "Neso Academy provides a thorough walkthrough of OS concepts, from basics to advanced, with easy-to-understand video tutorials.",
      },
    ],
  },

  {
    id: 3,
    title: "DBMS",
    content: "Database Management Systems",
    resources: [
      {
        name: "DBMS Concepts (GeeksforGeeks)",
        url: "https://www.geeksforgeeks.org/dbms/",
        description: "A complete guide on DBMS concepts including ER models, normalization, SQL commands, transactions, and indexing.",
      },
      {
        name: "DBMS One-Shot Video by Love Babbar",
        url: "https://www.youtube.com/watch?v=dl00fOOYLOM",
        description: "Love Babbar's one-shot video covering all important DBMS concepts, ideal for quick revision and interview preparation.",
      },
      {
        name: "LeetCode 50 SQL Problems",
        url: "https://leetcode.com/studyplan/top-sql-50/",
        description: "Practice SQL queries with LeetCode's curated set of 150 SQL problems ranging from easy to hard, perfect for improving SQL skills.",
      },
      {
        name: "HackerRank SQL Practice",
        url: "https://www.hackerrank.com/domains/sql",
        description: "Solve SQL questions on HackerRank, with challenges covering various levels of difficulty to help hone your query writing skills.",
      },
     
      {
        name: "Normalization Concepts (GeeksforGeeks)",
        url: "https://www.geeksforgeeks.org/normalization-process-in-dbms/",
        description: "Detailed explanation of normalization techniques, including first, second, and third normal forms, and how to apply them effectively to database design.",
      },
     
     
      
      {
        name: "SQL Interview Questions (InterviewBit)",
        url: "https://www.interviewbit.com/sql-interview-questions/",
        description: "A collection of commonly asked SQL interview questions and challenges to help prepare for database-related technical interviews.",
      },
      {
        name: "SQL Theory and Concepts (W3Schools)",
        url: "https://www.w3schools.com/sql/",
        description: "Learn SQL theory, commands, and concepts with interactive tutorials and exercises from W3Schools, suitable for beginners and advanced users.",
      },
    ],
  },

  {
    id: 4,
    title: "CN",
    content: "Computer Networks",
    resources: [
      {
        name: "GeeksforGeeks Computer Networks Tutorials",
        url: "https://www.geeksforgeeks.org/computer-network-tutorials/",
        description: "Detailed articles on computer networking concepts, covering all layers of the OSI and TCP/IP models, protocols, and networking devices.",
      },
      {
        name: "Neso Academy Computer Networks Lectures",
        url: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=gruXtrfQwmWmhFvj",
        description: "Comprehensive video lectures by Neso Academy on networking topics, focusing on the OSI model, TCP/IP model, and network security.",
      },
      {
        name: "Gate Smashers Computer Networks",
        url: "https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",
        description: "Gate Smashers provides an in-depth series on Computer Networks, covering key topics like IP addressing, routing, and transport layers.",
      },
      {
        name: "InterviewBit Computer Networks",
        url: "https://www.interviewbit.com/computer-network-interview-questions/",
        description: "A curated list of common Computer Networks interview questions, focusing on all the OSI layers, IP addressing, and network protocols.",
      },
      {
        name: "Apna College Computer Networks Notes",
        url: "https://drive.google.com/drive/folders/1wfNTKinBAV6CCxaI5lfSnnRFAYpy0uEl",
        description: "Apna College's video series explaining networking concepts in a simplified manner, with a focus on practical aspects and theory.",
      },
      {
        name: "GeeksforGeeks Network Layer Protocols",
        url: "https://www.geeksforgeeks.org/network-layer-in-osi-model/",
        description: "A deep dive into the Network Layer of the OSI model, including protocols, IP addressing, and routing algorithms.",
      },
    ],
  },
  {
    id: 5,
    title: "OOP",
    content: "Object-Oriented Programming",
    resources: [
      {
        name: "OOP Pillars (GeeksforGeeks)",
        url: "https://www.geeksforgeeks.org/fundamentals-of-object-oriented-programming/",
        description: "A comprehensive guide on the four pillars of OOP: Encapsulation, Abstraction, Inheritance, and Polymorphism, with examples.",
      },
      {
        name: "OOP in C++ by Love Babbar",
        url: "https://www.youtube.com/watch?v=i_5pvt7ag7E&t=35s",
        description: "A detailed video series by Love Babbar, explaining OOP concepts in C++ with practical coding examples, suitable for beginners and intermediate learners.",
      },
      {
        name: "OOP in Java by Apna College",
        url: "https://www.youtube.com/watch?si=5zzdwRBMFhqIIwEk&v=bSrm9RXwBaI&feature=youtu.be",
        description: "An easy-to-follow series on OOP in Java by Apna College, covering basic to advanced concepts with a focus on interview-oriented questions.",
      },
      {
        name: "GeeksforGeeks OOP Interview Questions",
        url: "https://www.geeksforgeeks.org/oops-interview-questions/",
        description: "A collection of commonly asked OOP interview questions, including practical coding problems and explanations to help with interview preparation.",
      },
      {
        name: "Top OOP Programs for Interviews (InterviewBit)",
        url: "https://www.interviewbit.com/oops-interview-questions/",
        description: "A list of OOP programs and interview questions designed to test your understanding of OOP concepts in real-world scenarios, ideal for coding interviews.",
      },
      {
        name: "Java Programs for OOP (GeeksforGeeks)",
        url: "https://www.geeksforgeeks.org/java-programs/",
        description: "A collection of Java programs that demonstrate OOP concepts, suitable for practicing coding problems frequently asked in interviews.",
      },
      {
        name: "C++ Programs for OOP (TutorialsPoint)",
        url: "https://www.tutorialspoint.com/cplusplus/cpp_object_oriented.htm",
        description: "Practical C++ programs that cover various OOP concepts, from basics to advanced, helping to solidify your understanding through coding practice.",
      },
    ],
  },
];

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <NavBar />
      <main className="flex-grow p-6 bg-blue-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              onClick={() => setSelectedCard(card)}
              className="transition-transform transform hover:scale-105 hover:shadow-xl bg-white rounded-lg border border-gray-200 p-4 hover:bg-blue-50"
            />
          ))}
        </div>
        {selectedCard && (
          <div className="mt-8 p-6 bg-white shadow-xl rounded-lg border border-gray-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCard.title}</h2>
            <p className="text-lg text-gray-800 mb-4">{selectedCard.content}</p>
            <ul className="list-disc list-inside space-y-3 pl-5">
              {selectedCard.resources.map((resource, index) => (
                <li key={index} className="text-gray-800">
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 font-medium"
                  >
                    {resource.name}
                  </a>
                  <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}


export default App;

