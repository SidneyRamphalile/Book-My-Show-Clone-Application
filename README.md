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

- **Virtualization** allows running a virtual OS on a local OS.
  - **Example**: Person 2's local OS is Mac, and with virtualization, they can run a virtual OS like Windows.

### Benefits
- **Resource Allocation**: We can assign RAM, ROM, and GPU for the Virtual OS as well.

### Example Setup
- **Windows Virtual OS** (for Person 2)
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

- **Containerization** allows for running isolated applications with their dependencies, ensuring consistency across multiple environments.

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
  - **Child Nodes**: Follows the guidance of the master node

### AWS
- **AWS** provides EC2 (Elastic Compute Cloud) for creating virtual machines.
