import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "0tew99uq",
  dataset: "production",
  apiVersion: "2024-12-02",
});

export async function getTestimonials() {
  return client.fetch(
    groq`*[_type == "testimonial"]{
      _id,
      quote,
      name,
      title,
      "profile": profile.asset->url
    }`
  );
}

export async function getWorkExperience() {
  return client.fetch(
    groq`*[_type == "workExperience"]{
      _id,
      id,
      title,
      desc,
      className,
      "certificate": certificate.asset->url
    }`
  );
}

export async function getServices() {
  return client.fetch(
    groq`*[_type == "service"]{
      _id,
      title,
      price,
      description,
      features,
      link
    }`    
  );
}
