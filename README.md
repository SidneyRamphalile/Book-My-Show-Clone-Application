# Book My Show Clone Application

## Pages/Components
- **Home.Page.jsx** (Default.Hoc.jsx)
- **Movie.Page.jsx** (Movie.Hoc.jsx)
- **Play.Page.jsx** (Default.Hoc.jsx)

## HOCs/Layouts
- **Default.Hoc.jsx**
- **Movie.Hoc.jsx**

## Components
- **Cast**
  - Cast.Component.jsx
- **Entertainment**
  - EntertainmentCard.Component.jsx
- **HeroCarousel**
  - HeroCarousel.Component.jsx
  - Carousel.Component.jsx
- **MovieHero**
  - MovieHero.Component.jsx
  - MovieInfo.Component.jsx
- **Navbar**
  - Navbar.Component.jsx
  - MovieNavbar.Component.jsx
- **PaymentModal**
  - Payment.Component.jsx
- **PlayFilters**
  - Filters.Component.jsx
- **Poster**
  - Poster.Component.jsx
- **PosterSlider**
  - PosterSliderComponent.jsx

## Setting Up the Project
To create the React app, run the following command:

  npx create-react-app .



  https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}


 ## DevOps
- **Dev** => Development Team
- **Ops** => Operation Team

### DevOps and CI/CD (Docker & Kubernetes)

- **Dev** ---------------------------------------------------> **Ops**
  Write Code + Share Code ----------------------------------> Testing, Scaling, Bug Fixing

- Developer Team -> Operation Team -> Testing Team

- As the complexity of the application increases, the time required to build the application will also increase.

### Scenario: 
- **Team of 3 members** (Mac, Windows, Linux) => Building Book My Show Application
  - **Person 1** (Windows)
  - **Person 2** (Mac)
  - **Person 3** (Linux)

- Packages:
  - Certain packages will only work on Windows and not on Mac.
  - Certain packages will only work on Mac and not on Windows.
  - Same for Linux.

- **Common Issue**: "It works on my machine, I'm not sure why it's not working on your machine."

Example:
Book My Show Application requires:
    RAM: 4GB
    ROM: 1TB
    GPU: 2GB

## Virtualization

**Virtualization** allows running a virtual OS on a local OS.

- **Example**: Running a Windows virtual OS on a Mac local OS.

### Benefits
- **Resource Allocation**: We can assign specific amounts of RAM, ROM, and GPU to the virtual OS.

### Example Setup
- **Windows Virtual OS**
  - 7GB RAM, 500GB ROM, 1GB GPU
- **Unix Virtual OS**
  - 3GB RAM, 500GB ROM, 1GB GPU

### Advanced Architecture

| Virtual OS         | RAM  | ROM   | GPU   |
|--------------------|------|-------|-------|
| Windows Virtual OS | 7GB  | 500GB | 1GB   |
| Unix Virtual OS    | 3GB  | 500GB | 1GB   |

**Base/Local OS**:
- 8GB RAM, 1TB ROM, 2GB GPU

## Containerization (Docker)

**Containerization** allows for running isolated applications with their dependencies, ensuring consistency across multiple environments.

### Example Setup
| Component           | RAM  | ROM   |
|---------------------|------|-------|
| Windows Virtual OS  | 2GB  | 250GB |
| Unix Virtual OS     | 2GB  | 250GB |
| Docker Engine       | 4GB  | 500GB |
| Base/Local OS       | 8GB  | 1TB   |

### Docker
- **Docker** runs on **EC2 Instances** with images and containers.

### Kubernetes (Orchestration)

- **Kubernetes** orchestrates containers across multiple nodes.
  - **Master Node**: The lead (like a conductor in an orchestra)
  - **Child Nodes**: Follow the guidance of the master node

### AWS
- **AWS** provides EC2 (Elastic Compute Cloud) for creating virtual machines.

### Docker Components

- **Image**: A lightweight, standalone, executable package that includes everything needed to run a piece of software, including the code, runtime, libraries, and dependencies.
- **Container**: A runtime instance of an image.

**Example:**
To run a server in Docker with three containers for a Book My Show Clone application:

- **Docker**
  - **Image**
    - **Container 1**
    - **Container 2**
    - **Container 3**

### Kubernetes Components

- **Master Node**: Manages the Kubernetes cluster.
  - **Child Nodes**: Run the containers.
    - **Pod**: A group of one or more containers with shared storage/network.

**Example:**
To orchestrate the Docker setup with Kubernetes:

- **Kubernetes**
  - **Master Node**    
    - **Child Node 1** | Pod 1
    - **Child Node 2** | Pod 2
    - **Child Node 3** | Pod 3

**Master Node (Manager)**
- **Child Node 1**
- **Child Node 2**
- **Child Node 3**
- **Development**: Analyzes and maintains all the Pods/Child Nodes/Servers/Containers.

### AWS EC2 and Kubernetes

- **AWS EC2**: Elastic Compute Cloud for creating virtual machines.
  - **Example Setup**: Unix OS on EC2 instance.

### Client-Server Architecture with Kubernetes

- **Client**: Sends request
- **Proxy Server**: Forwards request to Server
- **Server 1**: Handles 1000 requests per hour, including 200-300 similar requests.

**NGINX**
- **Reverse Proxy**: Forwards client requests to servers.
- **Load Balancing**: Distributes client requests across multiple servers for optimal resource utilization.

# Resume

## Validtaing Resume
https://resumeworded.com/

## Any File Operations on your cv/resume
https://www.ilovepdf.com/compress_pdf

## For Creating Resumes
https://www.canva.com/en_in/

## Sections of Resume
1. Name 
2. Desigation (Full Stack Intern at DevTown | Student | Fresher)
3. Experience/Internship 
4. Contanct Details (Email, Phone No, LinkedIn)
5. Skills
6. Education Qualifications
7. Projects
8. Achievements


Experience/Internship:
Full Stack Intern (MM/YYYY-MM/YYYY) - DevTown
Summary (I got worked here as an Full Stack Intern for so n so period where I explored the Full stack web devlopment with so and so technologies).
Book My Show Clone (1 or 2 lines)
project 2 (1 or 2 lines)



Tester Intern - Wipro


## Building Summary
https://quillbot.com/



# Job Platforms
1. LinkedIn
2. Naukri
3. Indeed
4. CutShort
5. GeekTrust
6. AngelList
7. Monster Jobs
8. Internshala




Additionally Resources, What Next ?, GitHub, Diff Positions
Typescript, DevOps
Payment Gateway Project
One Last Day (Project Submission)
DSA 



## What Next afet Web Tech ?
1. Next.js
2. Three.js
3. Electron (Windows Applicatons)
4. React Native (IOS and Android Applications)
5. GSAP or Framer Motion (Animations)
6. Scaling and DevOps | Sprint Review
7. Testing for React or JS and Advanced Performance 
8. DSA


## Technical Round For Coding Questions?
1. Explain the logic
2. Write the Logic/Code in Brute-Force (Base Level) Approach
3. Later Optimise the code


## Differnent Positions:
1. Software Engineer
2. Software Developer
3. Web Full Stack Developer 
4. Front-end Developers
5. Backend Developers
6. React JS Devlopers
7. Angular Developers
8. NodeJs Developers
9. DBA (Data Base Adminstrator)
9. Automated Testing
10. Manual Tester
11. UI UX Developer
12. Architect



## GitHub
https://rahuldkjain.github.io/gh-profile-readme-generator/








