import { imageConfigDefault } from "next/dist/shared/lib/image-config";

const trelloItems = [
    {
      title: "Board",
      desc: "A board is the highest level of organization in Trello, where all tasks and projects are tracked. It represents the entire workflow, and can contain multiple lists.",
      img: "/productive_1.jpg"
    },
    {
      title: "Lists",
      desc: "Lists help organize tasks within a board. A list can represent a stage of progress, like 'To Do', 'In Progress', or 'Done', and contains individual cards.",
      img: "productive_2.jpg"
    },
    {
      title: "Cards",
      desc: "Cards are the individual tasks or items within a list. Each card represents a specific task that can be assigned, tracked, and moved through various lists.",
      img: "productive_3.jpg"
    }
  ];

  const workflowList = [
    {
      title: "Project management",
      desc: "Keep tasks in order, deadlines on track, and team members aligned with Trello.",
      img: "/workflow_1.png",
      color: "bg-[#ff7452]",
    },
    {
      title: "Meetings",
      desc: "Empower your team meetings to be more productive, empowering, and dare we say—fun.",
      img: "/workflow_2.png",
      color: "bg-[#2684ff]",
    },
    {
      title: "Onboarding",
      desc: "Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.",
      img: "/workflow_3.png",
      color: "bg-[#57d9a3]",
    },
    {
      title: "Task management",
      desc: "Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.",
      img: "/workflow_4.png",
      color: "bg-[#ffc400]",
    },
    {
      title: "Resource hub",
      desc: "Save time with a well-designed hub that helps teams find information easily and quickly.",
      img: "/workflow_5.png",
      color: "bg-[#f99cdb]",
    },
  ];
  
  const planeList = [
    {
      planeName: "free",
      price: 0,
      title: "Free for your whole team",
      desc: "For individuals or teams looking to organize any project efficiently without any cost.",
      button: "Get Started",
    },
    {
      planeName: "standard",
      price: 10, // Assuming price is in dollars
      title: "Standard Plan for Small Teams",
      desc: "Perfect for small teams needing more control and collaboration tools.",
      button: "Start Free Trial",
    },
    {
      planeName: "premium",
      price: 25,
      title: "Premium Plan for Growing Teams",
      desc: "For growing teams that require advanced tools and integrations to scale projects.",
      button: "Upgrade Now",
    },
    {
      planeName: "enterprise",
      price: 100,
      title: "Enterprise Solution",
      desc: "Tailored for large organizations with customizable features and dedicated support.",
      button: "Contact Sales",
    },
  ];
  

  
export {trelloItems,workflowList,planeList};
  