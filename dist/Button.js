var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useState } from "react";
import { colors } from "@precooked/utils";
import { DynamicIcon } from "@precooked/react-dynamic-icon";
import { Icon } from "@precooked/react-icon";
import { Touchable } from "@precooked/react-touchable";
// Función para convertir un color HEX a RGB
var hexToRgb = function (hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var fullHex = hex.replace(shorthandRegex, function (r, g, b) { return r + r + g + g + b + b; });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
        }
        : null;
};
// Función para calcular la luminancia de un color RGB y determinar si es oscuro
var isDarkColor = function (color) {
    var rgb = hexToRgb(color);
    if (!rgb)
        return false;
    var r = rgb.r, g = rgb.g, b = rgb.b;
    // Fórmula para calcular el brillo
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness < 128;
};
var resolveIcon = function (icon, paths, size, color) {
    if (icon) {
        return React.createElement(Icon, { name: icon, size: size, color: color });
    }
    else if (paths) {
        return React.createElement(DynamicIcon, { paths: paths, size: size });
    }
    return null;
};
var sizeStyles = {
    xs: { padding: "4px", fontSize: "10px", iconSize: 12 },
    sm: { padding: "6px", fontSize: "12px", iconSize: 16 },
    md: { padding: "10px", fontSize: "16px", iconSize: 24 }, // Tamaño por defecto
    lg: { padding: "14px", fontSize: "18px", iconSize: 32 },
    xl: { padding: "18px", fontSize: "22px", iconSize: 40 },
};
var Button = function (_a) {
    var title = _a.title, onClick = _a.onClick, _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.borderRadius, borderRadius = _c === void 0 ? 4 : _c, _d = _a.type, type = _d === void 0 ? "solid" : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, startIcon = _a.startIcon, startIconPaths = _a.startIconPaths, startIconSize = _a.startIconSize, endIcon = _a.endIcon, endIconPaths = _a.endIconPaths, endIconSize = _a.endIconSize, _f = _a.hasShadow, hasShadow = _f === void 0 ? true : _f, style = _a.style, titleStyle = _a.titleStyle, _g = _a.size, size = _g === void 0 ? "md" : _g;
    var _h = useState(false), isPressed = _h[0], setIsPressed = _h[1];
    var handlePressStart = function () {
        if (!disabled) {
            setIsPressed(true);
        }
    };
    var handlePressEnd = function () {
        if (!disabled) {
            setIsPressed(false);
        }
    };
    var iconSize = sizeStyles[size].iconSize;
    // Resuelve el color de fondo para el botón
    var resolvedColor = color in colors ? colors[color] : color;
    // Determina el color del título e iconos según el fondo
    var contentColor = type === "solid"
        ? isDarkColor(resolvedColor || "") // Si el color es oscuro, usa blanco; si no, usa colors.text
            ? "#fff"
            : colors.textShade
        : resolvedColor; // En los demás casos, usa el color del texto y los iconos
    var buttonStyles = __assign({ display: "inline-flex", justifyContent: "center", alignItems: "center", flexDirection: "row", padding: sizeStyles[size].padding, borderRadius: "".concat(borderRadius, "px"), border: type === "outline" ? "2px solid ".concat(resolvedColor) : "none", backgroundColor: type === "solid" ? resolvedColor : "transparent", color: contentColor, boxShadow: hasShadow
            ? isPressed
                ? "none"
                : "0px 2px 5px rgba(0, 0, 0, 0.2)"
            : "none", transform: isPressed ? "scale(0.98)" : "scale(1)", cursor: disabled ? "not-allowed" : "pointer", transition: "all 0.2s ease-in-out", opacity: disabled ? 0.6 : 1, boxSizing: "border-box" }, style);
    var textStyles = __assign({ fontSize: sizeStyles[size].fontSize, margin: "0 8px", color: contentColor }, titleStyle);
    return (React.createElement(Touchable, { onClick: onClick, style: buttonStyles },
        React.createElement("button", { onMouseDown: handlePressStart, onMouseUp: handlePressEnd, onMouseLeave: handlePressEnd, onTouchStart: handlePressStart, onTouchEnd: handlePressEnd, style: {
                border: "none",
                backgroundColor: "transparent",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "inherit", // Inherit cursor from parent
                outline: "none", // Remove default button outline
            }, disabled: disabled },
            resolveIcon(startIcon, startIconPaths, startIconSize !== null && startIconSize !== void 0 ? startIconSize : iconSize, contentColor // El color del icono cambia dependiendo del fondo
            ),
            React.createElement("span", { style: textStyles }, title),
            resolveIcon(endIcon, endIconPaths, endIconSize !== null && endIconSize !== void 0 ? endIconSize : iconSize, contentColor // El color del icono cambia dependiendo del fondo
            ))));
};
export default Button;
