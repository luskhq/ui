import React from "react"
import {PropTypes} from "react"

import {Pressable} from "./index"

import c from "classnames"
import s from "../stylesheet"

import {apply} from "../stylesheet/utils"

const TextLink = ({children, className, ...props}, {theme}) => (
  <Pressable
    {...props}
    className={c(
      s.textDecoration("underline"),
      s.color("inherit"),
      s.transition("transform"),
      apply(null, () => {
        if (theme === "warning") {
          return [
            s.color("custom-yellow-metal-darker", ":hover"),
            s.color("custom-yellow-metal-dark", ":active"),
          ]
        }

        if (theme === "error") {
          return [
            s.color("custom-matrix-darker", ":hover"),
            s.color("custom-matrix-dark", ":active"),
          ]
        }

        return [
          s.color("oyster-blue", ":hover"),
          s.color("oyster-blue-dark-2", ":active"),
        ]
      }),
    )}>
    {children}
  </Pressable>
)

TextLink.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

TextLink.contextTypes = {
  theme: PropTypes.oneOf(["warning", "error"]),
}

export default TextLink