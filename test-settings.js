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
