import React from "react"
import {PropTypes} from "react"

import {SvgElement} from "./index"

import c from "classnames"
import s from "../stylesheet"

const Icon = ({name, theme, ...passingProps}) => (
  <SvgElement
    {...passingProps}
    viewBox="0 0 24 24"
    width="1.6em"
    height="1.6em">
    <g className={c(
        s.fill((theme === "light") ? "white" : "gray"),
      )}>
      <IconSwitch name={name} />
    </g>
  </SvgElement>
)

const IconSwitch = ({name}) => {
  switch (name) {
    case "add": return <path d="M11,11 L5,11 L5,13 L11,13 L11,19 L13,19 L13,13 L19,13 L19,11 L13,11 L13,5 L11,5 L11,11 Z" />
    case "appForm": return <path d="M19,3 L14.82,3 C14.4,1.84 13.3,1 12,1 C10.7,1 9.6,1.84 9.18,3 L5,3 C3.9,3 3,3.9 3,5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,5 C21,3.9 20.1,3 19,3 L19,3 Z M12,3 C12.55,3 13,3.45 13,4 C13,4.55 12.55,5 12,5 C11.45,5 11,4.55 11,4 C11,3.45 11.45,3 12,3 L12,3 Z M14,17 L7,17 L7,15 L14,15 L14,17 L14,17 Z M17,13 L7,13 L7,11 L17,11 L17,13 L17,13 Z M17,9 L7,9 L7,7 L17,7 L17,9 L17,9 Z" />
    case "archive": return <path d="M20.54,5.23 L19.15,3.55 C18.88,3.21 18.47,3 18,3 L6,3 C5.53,3 5.12,3.21 4.84,3.55 L3.46,5.23 C3.17,5.57 3,6.02 3,6.5 L3,19 C3,20.1 3.9,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,6.5 C21,6.02 20.83,5.57 20.54,5.23 L20.54,5.23 Z M12,17.5 L6.5,12 L10,12 L10,10 L14,10 L14,12 L17.5,12 L12,17.5 L12,17.5 Z M5.12,5 L5.93,4 L17.93,4 L18.87,5 L5.12,5 L5.12,5 Z" />
    case "attachment": return <path d="M2,12.5 C2,9.46 4.46,7 7.5,7 L18,7 C20.21,7 22,8.79 22,11 C22,13.21 20.21,15 18,15 L9.5,15 C8.12,15 7,13.88 7,12.5 C7,11.12 8.12,10 9.5,10 L17,10 L17,12 L9.41,12 C8.86,12 8.86,13 9.41,13 L18,13 C19.1,13 20,12.1 20,11 C20,9.9 19.1,9 18,9 L7.5,9 C5.57,9 4,10.57 4,12.5 C4,14.43 5.57,16 7.5,16 L17,16 L17,18 L7.5,18 C4.46,18 2,15.54 2,12.5 L2,12.5 Z" />
    case "board": return <path d="M4,20 L20,20 L20,17 L4,17 L4,20 L4,20 Z M4,9 L4,15 L20,15 L20,9 L4,9 L4,9 Z M4,7 L20,7 L20,4 L4,4 L4,7 Z" />
    case "candidate": return <path d="M12,11 C13.66,11 14.99,9.66 14.99,8 C14.99,6.34 13.66,5 12,5 C10.34,5 9,6.34 9,8 C9,9.66 10.34,11 12,11 L12,11 Z M12,13 C9.67,13 5,14.17 5,16.5 L5,19 L19,19 L19,16.5 C19,14.17 14.33,13 12,13 L12,13 Z" />
    case "candidates": return <path d="M16,11 C17.66,11 18.99,9.66 18.99,8 C18.99,6.34 17.66,5 16,5 C14.34,5 13,6.34 13,8 C13,9.66 14.34,11 16,11 L16,11 Z M8,11 C9.66,11 10.99,9.66 10.99,8 C10.99,6.34 9.66,5 8,5 C6.34,5 5,6.34 5,8 C5,9.66 6.34,11 8,11 L8,11 Z M8,13 C5.67,13 1,14.17 1,16.5 L1,19 L15,19 L15,16.5 C15,14.17 10.33,13 8,13 L8,13 Z M16,13 C15.71,13 15.38,13.02 15.03,13.05 C16.19,13.89 17,15.02 17,16.5 L17,19 L23,19 L23,16.5 C23,14.17 18.33,13 16,13 L16,13 Z" />
    case "copyToClipboard": return <path d="M6,3 C4.9,3 4,3.9 4,5 L4,17 L6,17 L6,5 L16,5 L16,3 L6,3 Z M10,7 C8.9,7 8,7.9 8,9 L8,19 C8,20.1 8.9,21 10,21 L18,21 C19.1,21 20,20.1 20,19 L20,9 C20,7.9 19.1,7 18,7 L10,7 Z M18,19 L10,19 L10,9 L18,9 L18,19 L18,19 Z" />
    case "delete": return <path d="M6.76923077,9.23076923 L17.2307692,9.23076923 L17.2307692,19.996562 C17.2307692,20.5507455 16.78125,21 16.2276729,21 L7.77232706,21 C7.21833227,21 6.76923077,20.5530037 6.76923077,19.996562 L6.76923077,9.23076923 Z M8.73076923,5.30769231 L5.46153846,5.30769231 L5.46153846,7.92307692 L18.5384615,7.92307692 L18.5384615,5.30769231 L15.2692308,5.30769231 L14.6153846,4 L9.38461538,4 L8.73076923,5.30769231 Z" />
    case "drag": return <path d="M5,7 L7,7 L7,9 L5,9 L5,7 Z M5,11 L7,11 L7,13 L5,13 L5,11 Z M9,7 L11,7 L11,9 L9,9 L9,7 Z M9,11 L11,11 L11,13 L9,13 L9,11 Z M13,7 L15,7 L15,9 L13,9 L13,7 Z M13,11 L15,11 L15,13 L13,13 L13,11 Z M17,7 L19,7 L19,9 L17,9 L17,7 Z M17,11 L19,11 L19,13 L17,13 L17,11 Z M5,15 L7,15 L7,17 L5,17 L5,15 Z M9,15 L11,15 L11,17 L9,17 L9,15 Z M13,15 L15,15 L15,17 L13,17 L13,15 Z M17,15 L19,15 L19,17 L17,17 L17,15 Z" />
    case "edit": return <path d="M13.8375336,6.4284434 L17.6087697,10.1996796 L9.12348836,18.6849609 L5.3522522,18.6849609 L5.3522522,14.9137248 L13.8375336,6.4284434 Z M15.9638261,4.30215085 C16.3516043,3.91437263 16.9874942,3.92154975 17.3753014,4.30935695 L19.7278562,6.66191177 C20.1196142,7.0536698 20.1258254,7.68262392 19.7350623,8.07338702 L18.5515788,9.25687053 L14.7803426,5.48563436 L15.9638261,4.30215085 Z" />
    case "file": return <path d="M14,2 L6,2 C4.9,2 4.01,2.9 4.01,4 L4,20 C4,21.1 4.89,22 5.99,22 L18,22 C19.1,22 20,21.1 20,20 L20,8 L14,2 L14,2 Z M16,18 L8,18 L8,16 L16,16 L16,18 L16,18 Z M16,14 L8,14 L8,12 L16,12 L16,14 L16,14 Z M13,9 L13,3.5 L18.5,9 L13,9 L13,9 Z" />
    case "hire": return <path d="M7.93884087,10.1388226 L19.9388409,10.1388226 L19.9388409,14.1388226 L3.93884087,14.1388226 L3.93884087,12.1388226 L3.93884087,5.13882256 L7.93884087,5.13882256 L7.93884087,10.1388226 L7.93884087,10.1388226 Z" transform="translate(11.938841, 9.638823) rotate(-45.000000) translate(-11.938841, -9.638823)" />
    case "message": return <path d="M20,4 L4,4 C2.9,4 2.01,4.9 2.01,6 L2,18 C2,19.1 2.9,20 4,20 L20,20 C21.1,20 22,19.1 22,18 L22,6 C22,4.9 21.1,4 20,4 L20,4 Z M20,8 L12,13 L4,8 L4,6 L12,11 L20,6 L20,8 L20,8 Z" />
    case "more": return <path d="M12,8 C13.1,8 14,7.1 14,6 C14,4.9 13.1,4 12,4 C10.9,4 10,4.9 10,6 C10,7.1 10.9,8 12,8 L12,8 Z M12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 L12,10 Z M12,16 C10.9,16 10,16.9 10,18 C10,19.1 10.9,20 12,20 C13.1,20 14,19.1 14,18 C14,16.9 13.1,16 12,16 L12,16 Z" />
    case "move": return <path d="M18.5486371,16.9970458 L18.5486371,18.8470459 L7.54863706,18.8470459 L7.54863706,15.1470458 L12.0094278,15.1470458 L4.83613926,7.97375722 L7.66456638,5.14533009 L14.848637,12.3294007 L14.848637,7.84704586 L18.5486371,7.84704586 L18.5486371,16.9970458 Z" transform="translate(11.692388, 11.996188) rotate(-45.000000) translate(-11.692388, -11.996188) " />
    case "next": return <path d="M10.41,6 L9,7.41 L13.58,12 L9,16.59 L10.41,18 L16.41,12 L10.41,6 Z" />
    case "note": return <path d="M3,13 L21,13 L21,11 L3,11 L3,13 L3,13 Z M3,17 L17,17 L17,15 L3,15 L3,17 L3,17 Z M3,7 L3,9 L21,9 L21,7 L3,7 L3,7 Z" />
    case "notificationsOff": return <path d="M20,18.69 L7.84,6.14 L5.27,3.49 L4,4.76 L6.8,7.56 L6.8,7.57 C6.28,8.56 6,9.73 6,10.99 L6,15.99 L4,17.99 L4,18.99 L17.73,18.99 L19.73,20.99 L21,19.72 L20,18.69 L20,18.69 Z M12,22 C13.11,22 14,21.11 14,20 L10,20 C10,21.11 10.89,22 12,22 L12,22 Z M18,14.68 L18,11 C18,7.92 16.36,5.36 13.5,4.68 L13.5,4 C13.5,3.17 12.83,2.5 12,2.5 C11.17,2.5 10.5,3.17 10.5,4 L10.5,4.68 C10.35,4.71 10.21,4.76 10.08,4.8 C9.98,4.83 9.88,4.87 9.78,4.91 L9.77,4.91 C9.76,4.91 9.76,4.91 9.75,4.92 C9.52,5.01 9.29,5.12 9.07,5.23 C9.07,5.23 9.06,5.23 9.06,5.24 L18,14.68 L18,14.68 Z" />
    case "notificationsOn": return <path d="M12,21.5 C13.1,21.5 14,20.6 14,19.5 L10,19.5 C10,20.6 10.89,21.5 12,21.5 L12,21.5 Z M18,15.5 L18,10.5 C18,7.43 16.36,4.86 13.5,4.18 L13.5,3.5 C13.5,2.67 12.83,2 12,2 C11.17,2 10.5,2.67 10.5,3.5 L10.5,4.18 C7.63,4.86 6,7.42 6,10.5 L6,15.5 L4,17.5 L4,18.5 L20,18.5 L20,17.5 L18,15.5 L18,15.5 Z" />
    case "openInNewTab": return <path d="M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 L14,3 Z" />
    case "organization": return <path d="M13 5H3v14h18V9h-8V5zM7 17H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V7h2v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2zm8 4h-2v2h2v2h-6v-2h2v-2h-2v-2h6v2z" />
    case "position": return <path d="M16,8 L16,6 C16,4.89 15.11,4 14,4 L10,4 C8.89,4 8,4.89 8,6 L8,8 L5,8 C3.89,8 3.01,8.89 3.01,10 L3,17 C3,18.11 3.89,19 5,19 L19,19 C20.11,19 21,18.11 21,17 L21,10 C21,8.89 20.11,8 19,8 L16,8 Z M14,8 L10,8 L10,6 L14,6 L14,8 L14,8 Z" />
    case "prev": return <path d="M14.41,7.41 L13,6 L7,12 L13,18 L14.41,16.59 L9.83,12 L14.41,7.41 Z" />
    case "reject": return <path d="M10,10 L4,10 L4,14 L10,14 L10,20 L14,20 L14,14 L20,14 L20,10 L14,10 L14,4 L10,4 L10,10 L10,10 Z" transform="translate(12.000000, 12.000000) rotate(-315.000000) translate(-12.000000, -12.000000)" />
    case "revert": return <path d="M6.34313672,6.34313672 L4,4 L4,11 L11,11 L8.22875477,8.22875477 C9.22180173,7.23534264 10.563985,6.66666667 12,6.66666667 C14.9455187,6.66666667 17.3333333,9.05448133 17.3333333,12 C17.3333333,14.9455187 14.9455187,17.3333333 12,17.3333333 C9.58796535,17.3333333 7.4941246,15.7177384 6.85970823,13.4282404 L4.28987746,14.1403365 C5.24233792,17.5776003 8.3818126,20 12,20 C16.418278,20 20,16.418278 20,12 C20,7.581722 16.418278,4 12,4 C9.84869456,4 7.83081041,4.85509942 6.34313672,6.34313672 Z" />
    case "search": return <path d="M20.175,17.875 L16.075,13.875 C17.575,11.375 17.275,8.075 15.075,5.875 C12.575,3.375 8.375,3.375 5.875,5.875 C3.375,8.375 3.375,12.575 5.875,15.075 C8.075,17.275 11.375,17.575 13.875,15.975 L17.875,19.975 L20.175,17.875 L20.175,17.875 Z M8.075,12.975 C6.775,11.575 6.775,9.375 8.075,7.975 C9.475,6.575 11.675,6.575 12.975,7.975 C14.375,9.375 14.375,11.575 12.975,12.875 C11.675,14.275 9.475,14.275 8.075,12.975 L8.075,12.975 Z" />
    case "settings": return <path d="M19.43,12.98 C19.47,12.66 19.5,12.34 19.5,12 C19.5,11.66 19.47,11.34 19.43,11.02 L21.54,9.37 C21.73,9.22 21.78,8.95 21.66,8.73 L19.66,5.27 C19.54,5.05 19.27,4.97 19.05,5.05 L16.56,6.05 C16.04,5.65 15.48,5.32 14.87,5.07 L14.49,2.42 C14.46,2.18 14.25,2 14,2 L10,2 C9.75,2 9.54,2.18 9.51,2.42 L9.13,5.07 C8.52,5.32 7.96,5.66 7.44,6.05 L4.95,5.05 C4.72,4.96 4.46,5.05 4.34,5.27 L2.34,8.73 C2.21,8.95 2.27,9.22 2.46,9.37 L4.57,11.02 C4.53,11.34 4.5,11.67 4.5,12 C4.5,12.33 4.53,12.66 4.57,12.98 L2.46,14.63 C2.27,14.78 2.22,15.05 2.34,15.27 L4.34,18.73 C4.46,18.95 4.73,19.03 4.95,18.95 L7.44,17.95 C7.96,18.35 8.52,18.68 9.13,18.93 L9.51,21.58 C9.54,21.82 9.75,22 10,22 L14,22 C14.25,22 14.46,21.82 14.49,21.58 L14.87,18.93 C15.48,18.68 16.04,18.34 16.56,17.95 L19.05,18.95 C19.28,19.04 19.54,18.95 19.66,18.73 L21.66,15.27 C21.78,15.05 21.73,14.78 21.54,14.63 L19.43,12.98 L19.43,12.98 Z M12,15.5 C10.07,15.5 8.5,13.93 8.5,12 C8.5,10.07 10.07,8.5 12,8.5 C13.93,8.5 15.5,10.07 15.5,12 C15.5,13.93 13.93,15.5 12,15.5 L12,15.5 Z" />
    case "snippets": return <path d="M4,6 L2,6 L2,20 C2,21.1 2.9,22 4,22 L18,22 L18,20 L4,20 L4,6 Z M20,2 L8,2 C6.9,2 6,2.9 6,4 L6,16 C6,17.1 6.9,18 8,18 L20,18 C21.1,18 22,17.1 22,16 L22,4 C22,2.9 21.1,2 20,2 Z M19,11 L9,11 L9,9 L19,9 L19,11 Z M15,15 L9,15 L9,13 L15,13 L15,15 Z M19,7 L9,7 L9,5 L19,5 L19,7 Z" />
    case "summary": return <path d="M18,2 L6,2 C4.9,2 4,2.9 4,4 L4,20 C4,21.1 4.9,22 6,22 L18,22 C19.1,22 20,21.1 20,20 L20,4 C20,2.9 19.1,2 18,2 L18,2 Z M6,4 L11,4 L11,12 L8.5,10.5 L6,12 L6,4 L6,4 Z" />
    case "unassign": return <path d="M5.93933983,8 L5,8 C3.89,8 3.01,8.89 3.01,10 L3,17 C3,18.11 3.89,19 5,19 L16.9393398,19 L18.4696699,20.5303301 L19.5303301,19.4696699 L5.53033009,5.46966991 L4.46966991,6.53033009 L5.93933983,8 Z M8,6.06066017 L8,6 C8,4.89 8.89,4 10,4 L14,4 C15.11,4 16,4.89 16,6 L16,8 L19,8 C20.11,8 21,8.89 21,10 L21,17 C21,17.9187605 20.3902544,18.6867974 19.5507012,18.9241725 L20.267767,18.2071068 L8.06066017,6 L8,6.06066017 Z M14,8 L10,8 L10,6 L14,6 L14,8 L14,8 Z" />
    case "user": return <path d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 L12,2 Z M12,5 C13.66,5 15,6.34 15,8 C15,9.66 13.66,11 12,11 C10.34,11 9,9.66 9,8 C9,6.34 10.34,5 12,5 L12,5 Z M12,19.2 C9.5,19.2 7.29,17.92 6,15.98 C6.03,13.99 10,12.9 12,12.9 C13.99,12.9 17.97,13.99 18,15.98 C16.71,17.92 14.5,19.2 12,19.2 L12,19.2 Z" />
    default: return <path />
  }
}

Icon.propTypes = {
  name: PropTypes.oneOf([
    "add",
    "appForm",
    "archive",
    "attachment",
    "board",
    "candidate",
    "candidates",
    "copyToClipboard",
    "delete",
    "drag",
    "edit",
    "file",
    "hire",
    "message",
    "more",
    "move",
    "next",
    "note",
    "notificationsOff",
    "notificationsOn",
    "openInNewTab",
    "organization",
    "position",
    "prev",
    "reject",
    "revert",
    "search",
    "settings",
    "snippets",
    "summary",
    "unassign",
    "user",
  ]),
  theme: PropTypes.oneOf([
    "light",
  ]),
}

export default Icon
