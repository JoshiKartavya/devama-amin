export default {
    name: "workExperience",
    title: "Work Experience",
    type: "document",
    fields: [
      {
        name: "id",
        title: "ID",
        type: "number",
        description: "Unique identifier for the experience.",
      },
      {
        name: "title",
        title: "Title",
        type: "string",
        description: "Job title or role.",
      },
      {
        name: "desc",
        title: "Description",
        type: "text",
        description: "Description of the role and responsibilities.",
      },
      {
        name: "className",
        title: "CSS Class Name",
        type: "string",
        description: "Optional CSS class for layout adjustments.",
      },
      {
        name: "certificate",
        title: "Certificate",
        type: "image",
        description: "Certificate image or mockup file.",
        options: {
          hotspot: true,
        },
      },
    ],
  };
  