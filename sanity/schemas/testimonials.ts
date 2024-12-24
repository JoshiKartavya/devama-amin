import { defineType } from 'sanity';

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).error('Quote is required and should be at least 10 characters.'),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Name is required.'),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('Title is required.'),
    },
    {
      name: 'profile',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true, // Enables image cropping in the Studio
      },
      validation: (Rule) => Rule.required().error('Profile image is required.'),
    },
  ],
});
