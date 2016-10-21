import React from "react"
import {PropTypes} from "react"

import {SmallIcon} from "./index"
import {Pressable} from "./index"

import c from "classnames"
import s from "../stylesheet"

// Utility function to make working with map-like objects a bit easier
const pick = (map, key) => map[key] || map.regular

class FlatButton extends React.Component {

  componentDidMount() {
    if (this.props.autofocus) {
      this.focus()
    }
  }

  focus() {
    this.button.focus()
  }

  render() {
    const {label, theme, active, disabled, pending, labelPending, size, icon, ...passingProps} = this.props

    const sizes = {
      large: s.fontSize("15"),
      fullwidth: [
        s.width("100perc"),
        s.fontSize("16"),
      ],
      regular: s.fontSize("13"),
    }

    const applyTheme = () => {
      if (disabled) {
        return [
          s.backgroundColor("custom-mischka-2"),
          s.backgroundColor("custom-mischka-2", ":hover"),
        ]
      }

      if (pending || active) {
        return [
          s.backgroundColor("black-alpha-15"),
          s.backgroundColor("black-alpha-5", ":hover"),
        ]
      }

      return [
        s.backgroundColor("transparent"),
        s.backgroundColor("black-alpha-5", ":hover"),
        s.backgroundColor("black-alpha-15", ":active"),
      ]
    }

    return (
      <Pressable
        {...passingProps}
        ref={(ref) => this.button = ref}
        disabled={disabled || pending}
        className={c(
            s.display("inline-block"),
            s.textDecoration("none"),
            s.textTransform("uppercase"),
            s.boxShadow("none"),
            s.borderRadius("3"),
            s.transition("background"),
            pick(sizes, size),
            applyTheme(),
        )}>
        <FlatButtonInner
          label={label}
          theme={theme}
          pending={pending}
          labelPending={labelPending}
          size={size}
          icon={icon}
          />
      </Pressable>
    )
  }

}

class FlatButtonInner extends React.Component {

  render() {
    const {label, theme, pending, labelPending, size, icon} = this.props

    const sizes = {
      large: [
        s.height("51"),
        s.minWidth("135"),
        s.paddingAll(["0", "24"]),
      ],
      condensed: [
        s.height("36"),
        s.paddingAll(["0", "12"]),
      ],
      fullwidth: [
        s.height("54"),
      ],
      regular: [
        s.height("45"),
        s.minWidth("105"),
        s.paddingAll(["0", "15"]),
      ],
    }

    return (
      <div className={c(
          s.display("flex"),
          s.alignItems("center"),
          s.justifyContent("center"),
          pick(sizes, size),
        )}>
        <div className={c(
          s.color("gray"),
          s.color(theme === "light" && "white"),
          s.color(theme === "action" && "oyster-blue"),
          s.color(theme === "create" && "oyster-red"),
          s.fontWeight("600"),
        )}>
          {(pending) ? labelPending : label}
        </div>
        {(icon) ?
          <div className={c(
            s.marginAll(["auto", "auto", "auto", "9"]),
          )}>
            <SmallIcon name={icon} theme={theme} size="small" />
          </div>
          : null}
      </div>
    )
  }

}

FlatButton.propTypes = {
  autofocus: PropTypes.bool,
  label: PropTypes.string.isRequired,
  labelPending: PropTypes.string,
  type: PropTypes.oneOf([
    "button",
    "submit",
    "reset",
  ]),
  theme: PropTypes.oneOf([
    "action",
    "create",
    "danger",
    "light",
  ]),
  size: PropTypes.oneOf([
    "large",
    "condensed",
    "fullwidth",
  ]),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  icon: SmallIcon.propTypes.name,
}

export default FlatButton