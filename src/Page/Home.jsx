import React from "react";
import { Link } from "react-router-dom";


const cardData = [
  {
    title: "Top 10 Best Automation Testing Tools in 2023",
    image: "https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg",
    link: "https://www.guvi.in/blog/best-automation-testing-tools/",
    description: "Automation testing tools have really become a great and important factor in building efficient web",
    date: "17 August 2023",
    comments: "No Comments",
  },
  {
    title: "Top Skills Required to Become a Digital Marketer",
    image: "https://img.freepik.com/free-photo/saas-concept-collage_23-2149399281.jpg",
    link: "https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/",
    description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
    image: "https://img.freepik.com/free-photo/server-cloud-data-storage-concept-cloudscape-digital-online-service-global-network-web-database-backup-computer-infrastructure-technology_90220-1325.jpg",
    link: "https://www.guvi.in/blog/career-opportunities-in-digital-marketing/",
    description: "As we move forward in today’s digital age, the need for businesses to engage with",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "UI/UX Project Showcase: UX-perience Elevated",
    image: "https://img.freepik.com/free-photo/cloud-data-storage-rack-concept-glass-cube-cloudscape-digital-metaverse-server-global-network-business-web-database-backup-computer-private-infrastructure-technology_90220-1363.jpg",
    link: "https://www.guvi.in/blog/ui-ux-project-showcase/",
    description: "Are you a professional UI/UX designer who finds it hard to attract your clients or",
    date: "14 August 2023",
    comments: "No Comments"
  },
  {
    title: "10 Best Data Science Online Courses for Beginners | 2023",
    image: "https://img.freepik.com/free-photo/concept-cyber-server-cloud-data-storage-cloudscape-digital-online-rack-service-global-network-database-backup-computer-safety-infrastructure-technology_90220-1336.jpg",
    link: "https://www.guvi.in/blog/best-data-science-courses-for-beginners/",
    description: "In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most",
    date: "14 August 2023",
    comments: "No Comments"
  },
  {
    title: "How to Become a UI/UX Designer: 10 Steps to Master the Craft",
    image: "https://img.freepik.com/premium-photo/3d-cloud-computing-hosting-technology-with-electronic-devices_843415-59.jpg",
    description: "Have you ever wondered what it takes to create captivating designs that leave users delighted",
    date: "11 August 2023",
    comments: "No Comments"
  }
];

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-lg-4 col-md-6 p-5" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={card.link}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </p>
                <p className="card-text">{card.description}</p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.date} <ul><li>{card.comments}</li></ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;