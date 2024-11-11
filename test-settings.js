const slideshow = {
  "name": "Slideshow",
  "class": "section-container__slideshow",
  "max_blocks": 3,
  "settings": [
  ],
  "blocks": [
    {
      "type": "image",
      "name": "Image",
      "settings": [
        {
          "id": "image",
          "type": "image_picker",
          "label": "Image"
        },
        {
          "id": "mobile_image",
          "type": "image_picker",
          "label": "Mobile image"
        },
        {
          "type": "text",
          "id": "heading",
          "label": "Heading"
        },
        {
          "type": "text",
          "id": "paragraph",
          "label": "Paragraph"
        },
        {
          "type": "url",
          "id": "link",
          "label": "Link",
          "info": "Link to the page"
        },
        {
          "type": "text",
          "id": "button_label",
          "label": "t:sections.image-with-text.blocks.image.settings.button_label.label",
          "default": "Show more"
        },
        {
          "type": "select",
          "id": "vertical_alignment",
          "label": "Vertical alignment",
          "options": [
            {
              "value": "top",
              "label": "Top"
            },
            {
              "value": "middle",
              "label": "Middle"
            },
            {
              "value": "bottom",
              "label": "Bottom"
            }
          ],
          "default": "middle"
        },
        {
          "type": "select",
          "id": "horizontal_alignment",
          "label": "Horizontal alignment",
          "options": [
            {
              "value": "left",
              "label": "Left"
            },
            {
              "value": "center",
              "label": "Center"
            },
            {
              "value": "right",
              "label": "Right"
            }
          ],
          "default": "center"
        },
        {
          "type": "select",
          "id": "text_alignment",
          "label": "Text alignment",
          "options": [
            {
              "value": "left",
              "label": "Left"
            },
            {
              "value": "center",
              "label": "Center"
            },
            {
              "value": "right",
              "label": "Right"
            }
          ],
          "default": "center"
        },
        {
          "type": "header",
          "content": "Colors"
        },
        {
          "type": "color",
          "id": "color_overlay",
          "label": "Overlay color",
          "default": "rgba(0,0,0,0)"
        },
        {
          "type": "range",
          "id": "overlay_opacity",
          "min": 0,
          "max": 100,
          "step": 1,
          "unit": "%",
          "label": "Overlay opacity",
          "default": 25
        },
        {
          "type": "color",
          "id": "color_text",
          "label": "Text color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "color_button",
          "label": "Button color",
          "default": "#ffffff"
        },
        {
          "type": "color",
          "id": "color_button_hover",
          "label": "Button hover color",
          "default": "#ffffff"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Slideshow",
      "blocks": [
        { "type": "image" },
        { "type": "image" },
        { "type": "image" }
      ]
    }
  ]
}

const legacySection = {
  "name": "Legacy Sections",
  "class": "section-container__legacy",
  "settings": [
    {
      "type": "header",
      "content": "Text with Image #1"
    },
    {
      "type": "text",
      "id": "heading1",
      "label": "Heading"
    },
    {
      "type": "inline_richtext",
      "id": "paragraph1",
      "label": "Paragraph"
    },
    {
      "type": "image_picker",
      "id": "image1",
      "label": "Image"
    },
    {
      "type": "text",
      "id": "cta_text1",
      "label": "CTA Text"
    },
    {
      "type": "url",
      "id": "cta_url1",
      "label": "CTA URL"
    },
    {
      "type": "header",
      "content": "Text with Image #2"
    },
    {
      "type": "text",
      "id": "heading2",
      "label": "Heading"
    },
    {
      "type": "inline_richtext",
      "id": "paragraph2",
      "label": "Paragraph"
    },
    {
      "type": "image_picker",
      "id": "image2",
      "label": "Image"
    },
    {
      "type": "text",
      "id": "cta_text2",
      "label": "CTA Text"
    },
    {
      "type": "url",
      "id": "cta_url2",
      "label": "CTA URL"
    },
    {
      "type": "header",
      "content": "About Section"
    },
    {
      "type": "richtext",
      "id": "paragraph",
      "label": "About Section Paragraph"
    },
    {
      "type": "image_picker",
      "id": "image_with_text_image",
      "label": "About Section Image"
    },
    {
      "type": "text",
      "id": "about_cta_text",
      "label": "About CTA Text"
    },
    {
      "type": "url",
      "id": "about_cta_url",
      "label": "About CTA URL"
    },
    {
      "type": "header",
      "content": "Reviews Section"
    },
    {
      "type": "text",
      "id": "reviews_cta_text",
      "label": "Reviews CTA Text"
    },
    {
      "type": "url",
      "id": "reviews_cta_url",
      "label": "Reviews CTA URL"
    }
  ],
  "blocks": [
    {
      "type": "review",
      "name": "Review",
      "settings": [
        {
          "type": "richtext",
          "id": "review",
          "label": "Review"
        }
      ]
    }
  ],
  "presets": [
    {
      "category": "Legacy Sections",
      "name": "Legacy Sections"
    }
  ]
}
