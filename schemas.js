const BaseJoi = require("joi");
// const sanitizeHtml = require("sanitize-html");

// const extension = (joi) => ({
//   type: "string",
//   base: joi.string(),
//   messages: {
//     "string.escapeHTML": "{{#label}} must not include HTML!",
//   },
//   rules: {
//     escapeHTML: {
//       validate(value, helpers) {
//         const clean = sanitizeHtml(value, {
//           allowedTags: [],
//           allowedAttributes: {},
//         });
//         if (clean !== value)
//           return helpers.error("string.escapeHTML", { value });
//         return clean;
//       },
//     },
//   },
// });

const Joi = BaseJoi; // Note: .extend(extension)

module.exports.campgroundJoiSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(), // Note: escapeHTML()
    price: Joi.number().required().min(0),
    description: Joi.string().required(), // Note: escapeHTML()
    location: Joi.string().required(), // Note: escapeHTML()
  }).required(),
  deleteImages: Joi.array(),
});

module.exports.reviewJoiSchema = Joi.object({
  review: Joi.object({
    body: Joi.string().required(), // Note: escapeHTML()
    rating: Joi.number().required().min(1).max(5),
  }),
}).required();
