import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact_section">
      <h1 className="contact_title">Contact</h1>
      <div className="contact_icons">
        <a href="mailto: hadongpark10@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#007d23"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <polyline
              points="224 56 128 144 32 56"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></polyline>
          </svg>
        </a>
        <a
          href="https://do.linkedin.com/in/hadong-park-476b6b219"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#007d23"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <rect
              x="36"
              y="36"
              width="184"
              height="184"
              rx="8"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></rect>
            <line
              x1="120"
              y1="112"
              x2="120"
              y2="176"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <line
              x1="88"
              y1="112"
              x2="88"
              y2="176"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></line>
            <path
              d="M120,140a28,28,0,0,1,56,0v36"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <circle cx="88" cy="80" r="12"></circle>
          </svg>
        </a>
        <a href="https://github.com/hpark215?tab=repositories">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#007d23"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <path
              d="M84,240a23.9,23.9,0,0,0,24-24V168"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <path
              d="M172,240a23.9,23.9,0,0,1-24-24V168"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <path
              d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <path
              d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
            <path
              d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
              fill="none"
              stroke="#007d23"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Contact;
