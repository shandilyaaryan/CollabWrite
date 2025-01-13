export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Software Development Proposal</title>
</head>
<body>
    <header>
        <h1>Software Development Proposal</h1>
        <p>Your Company Name</p>
    </header>
    <main>
        <h2>1. Executive Summary</h2>
        <p>Provide a brief overview of the project, including objectives, scope, and expected outcomes.</p>
        
        <h2>2. Project Objectives</h2>
        <ul>
            <li>Objective 1: Describe the first objective.</li>
            <li>Objective 2: Describe the second objective.</li>
            <li>Objective 3: Describe the third objective.</li>
        </ul>
        
        <h2>3. Scope of Work</h2>
        <p>Outline the tasks and deliverables for the project. Include key milestones and timelines.</p>
        
        <h2>4. Technical Approach</h2>
        <p>Detail the technologies, frameworks, and methodologies that will be used in the project.</p>
        
        <h2>5. Team Structure</h2>
        <p>Introduce the project team, their roles, and relevant expertise.</p>
        
        <h2>6. Timeline and Milestones</h2>
        <p>Provide a high-level timeline with key milestones and deadlines.</p>
        
        <h2>7. Budget</h2>
        <p>Include an estimated budget for the project, broken down by categories.</p>
        
        <h2>8. Conclusion</h2>
        <p>Summarize the proposal and provide a call to action, such as scheduling a follow-up meeting.</p>
    </main>
    <footer>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
    </footer>
</body>
</html>

`,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Proposal</title>
</head>
<body>
    <header>
        <h1>Project Proposal</h1>
        <p>Your Company Name</p>
    </header>
    <main>
        <h2>1. Introduction</h2>
        <p>Provide a brief introduction to the project, its goals, and the importance of the proposal.</p>

        <h2>2. Project Overview</h2>
        <p>Describe the project in detail, including the problem being solved, objectives, and the scope.</p>

        <h2>3. Project Goals</h2>
        <ul>
            <li>Goal 1: Describe the first goal.</li>
            <li>Goal 2: Describe the second goal.</li>
            <li>Goal 3: Describe the third goal.</li>
        </ul>

        <h2>4. Project Deliverables</h2>
        <p>Outline the deliverables and milestones for the project.</p>

        <h2>5. Timeline</h2>
        <p>Provide a high-level timeline of the project, including start and end dates, as well as major milestones.</p>

        <h2>6. Budget Estimate</h2>
        <p>Include an estimated budget, breaking it down into key categories or phases of the project.</p>

        <h2>7. Project Team</h2>
        <p>Introduce the project team, including roles and responsibilities.</p>

        <h2>8. Risk Management</h2>
        <p>Identify potential risks and mitigation strategies for the project.</p>

        <h2>9. Conclusion</h2>
        <p>Summarize the proposal and the next steps, such as seeking approval or scheduling a meeting.</p>
    </main>
    <footer>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
    </footer>
</body>
</html>
`,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Business Letter</title>
</head>
<body>
    <header>
        <h1>Business Letter</h1>
        <p>Your Company Name</p>
    </header>
    <main>
        <h2>Recipient's Information</h2>
        <p>Name: [Recipient's Name]</p>
        <p>Title: [Recipient's Title]</p>
        <p>Company: [Recipient's Company]</p>
        <p>Address: [Recipient's Address]</p>
        <p>City, State, ZIP: [City, State, ZIP]</p>

        <h2>Letter Content</h2>
        <p>Date: [Insert Date]</p>
        <p>Dear [Recipient's Name],</p>
        
        <p>[Start your letter here. This could include the purpose of your communication, any requests, or information you wish to convey.]</p>
        
        <p>[Continue with the details, closing statements, and any action you would like the recipient to take.]</p>
        
        <p>Thank you for your attention to this matter. I look forward to hearing from you.</p>

        <h2>Closing</h2>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
        <p>[Your Title]</p>
        <p>[Your Company Name]</p>
        <p>[Your Contact Information]</p>
    </main>
    <footer>
        <p>&copy; 2025 Your Company Name. All rights reserved.</p>
    </footer>
</body>
</html>

`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resume</title>
</head>
<body>
    <header>
        <h1>[Your Name]</h1>
        <p>[Your Title]</p>
        <p>[Your Address]</p>
        <p>[Your Phone Number] | [Your Email Address] | [Your LinkedIn or Portfolio Link]</p>
    </header>

    <main>
        <h2>Objective</h2>
        <p>[A brief statement about your career goals and what you aim to achieve in the role you are applying for.]</p>

        <h2>Experience</h2>
        <h3>[Job Title] - [Company Name]</h3>
        <p>[Location] | [Dates of Employment]</p>
        <ul>
            <li>[Describe your responsibilities and achievements.]</li>
            <li>[Describe your responsibilities and achievements.]</li>
        </ul>

        <h3>[Job Title] - [Company Name]</h3>
        <p>[Location] | [Dates of Employment]</p>
        <ul>
            <li>[Describe your responsibilities and achievements.]</li>
            <li>[Describe your responsibilities and achievements.]</li>
        </ul>

        <h2>Education</h2>
        <h3>[Degree] - [University Name]</h3>
        <p>[Graduation Date]</p>
        <p>[Relevant Coursework or Honors]</p>

        <h2>Skills</h2>
        <ul>
            <li>[Skill 1]</li>
            <li>[Skill 2]</li>
            <li>[Skill 3]</li>
        </ul>

        <h2>Certifications</h2>
        <ul>
            <li>[Certification Name] - [Issuing Organization] | [Date]</li>
            <li>[Certification Name] - [Issuing Organization] | [Date]</li>
        </ul>

        <h2>Projects</h2>
        <h3>[Project Title]</h3>
        <p>[Description of the project, your role, and the technologies used.]</p>

        <h2>References</h2>
        <p>Available upon request.</p>
    </main>

    <footer>
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
    </footer>
</body>
</html>

`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cover Letter</title>
</head>
<body>
    <header>
        <h1>[Your Name]</h1>
        <p>[Your Address]</p>
        <p>[Your Phone Number] | [Your Email Address] | [Your LinkedIn or Portfolio Link]</p>
    </header>

    <main>
        <h2>Recipient's Information</h2>
        <p>Name: [Recipient's Name]</p>
        <p>Title: [Recipient's Title]</p>
        <p>Company: [Recipient's Company]</p>
        <p>Address: [Recipient's Address]</p>
        <p>City, State, ZIP: [City, State, ZIP]</p>

        <h2>Letter Content</h2>
        <p>Date: [Insert Date]</p>
        <p>Dear [Recipient's Name],</p>
        
        <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [Your Field], I believe I can contribute effectively to your team and bring [mention skills, experience, or qualities you possess that align with the job].</p>

        <p>[Expand on why you are interested in the role and the company. Mention any relevant experiences or achievements that demonstrate your qualifications.]</p>

        <p>I am excited about the opportunity to contribute to [Company Name] and would love the chance to discuss how my skills and experiences can benefit your team. Thank you for considering my application. I look forward to the opportunity to discuss my qualifications further.</p>

        <p>Sincerely,</p>
        <p>[Your Name]</p>
    </main>

    <footer>
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
    </footer>
</body>
</html>

`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Letter</title>
</head>
<body>
    <header>
        <h1>[Your Name]</h1>
        <p>[Your Address]</p>
        <p>[Your Phone Number] | [Your Email Address]</p>
    </header>

    <main>
        <h2>Recipient's Information</h2>
        <p>Name: [Recipient's Name]</p>
        <p>Title: [Recipient's Title]</p>
        <p>Company: [Recipient's Company]</p>
        <p>Address: [Recipient's Address]</p>
        <p>City, State, ZIP: [City, State, ZIP]</p>

        <h2>Letter Content</h2>
        <p>Date: [Insert Date]</p>
        <p>Dear [Recipient's Name],</p>
        
        <p>[Start your letter here. This could include the purpose of your communication, any requests, or information you wish to convey.]</p>
        
        <p>[Continue with the details, closing statements, and any action you would like the recipient to take.]</p>
        
        <p>Thank you for your time and consideration.</p>

        <h2>Closing</h2>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
    </main>

    <footer>
        <p>&copy; 2025 [Your Name]. All rights reserved.</p>
    </footer>
</body>
</html>
`,
  },
];
