import { PackageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Product",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "subtitle",
      type: "string",
    }),
    defineField({
      name: "position",
      type: "number",
      description: "Order # in grid",
    }),
    defineField({
      name: "image",
      type: "image",
    }),
    defineField({
      name: "imageAltText",
      title: "Image Alt Text",
      type: "string",
    }),
    defineField({
      name: "link",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
