"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54],{48054:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`
// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: function() { return /* binding */ skeleton; }
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(93967);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/antd/es/config-provider/context.js
var context = __webpack_require__(53124);
// EXTERNAL MODULE: ./node_modules/rc-util/es/omit.js
var omit = __webpack_require__(98423);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Element.js
"use client";



const Element = props => {
  const {
    prefixCls,
    className,
    style,
    size,
    shape
  } = props;
  const sizeCls = classnames_default()({
    [\`\${prefixCls}-lg\`]: size === 'large',
    [\`\${prefixCls}-sm\`]: size === 'small'
  });
  const shapeCls = classnames_default()({
    [\`\${prefixCls}-circle\`]: shape === 'circle',
    [\`\${prefixCls}-square\`]: shape === 'square',
    [\`\${prefixCls}-round\`]: shape === 'round'
  });
  const sizeStyle = react.useMemo(() => typeof size === 'number' ? {
    width: size,
    height: size,
    lineHeight: \`\${size}px\`
  } : {}, [size]);
  return /*#__PURE__*/react.createElement("span", {
    className: classnames_default()(prefixCls, sizeCls, shapeCls, className),
    style: Object.assign(Object.assign({}, sizeStyle), style)
  });
};
/* harmony default export */ var skeleton_Element = (Element);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs/es/index.js + 37 modules
var es = __webpack_require__(11568);
// EXTERNAL MODULE: ./node_modules/antd/es/theme/util/genStyleUtils.js
var genStyleUtils = __webpack_require__(83559);
// EXTERNAL MODULE: ./node_modules/@ant-design/cssinjs-utils/es/index.js + 12 modules
var cssinjs_utils_es = __webpack_require__(83262);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/style/index.js


const skeletonClsLoading = new es/* Keyframes */.E4(\`ant-skeleton-loading\`, {
  '0%': {
    backgroundPosition: '100% 50%'
  },
  '100%': {
    backgroundPosition: '0 50%'
  }
});
const genSkeletonElementCommonSize = size => ({
  height: size,
  lineHeight: (0,es/* unit */.bf)(size)
});
const genSkeletonElementAvatarSize = size => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonColor = token => ({
  background: token.skeletonLoadingBackground,
  backgroundSize: '400% 100%',
  animationName: skeletonClsLoading,
  animationDuration: token.skeletonLoadingMotionDuration,
  animationTimingFunction: 'ease',
  animationIterationCount: 'infinite'
});
const genSkeletonElementInputSize = (size, calc) => Object.assign({
  width: calc(size).mul(5).equal(),
  minWidth: calc(size).mul(5).equal()
}, genSkeletonElementCommonSize(size));
const genSkeletonElementAvatar = token => {
  const {
    skeletonAvatarCls,
    gradientFromColor,
    controlHeight,
    controlHeightLG,
    controlHeightSM
  } = token;
  return {
    [skeletonAvatarCls]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor
    }, genSkeletonElementAvatarSize(controlHeight)),
    [\`\${skeletonAvatarCls}\${skeletonAvatarCls}-circle\`]: {
      borderRadius: '50%'
    },
    [\`\${skeletonAvatarCls}\${skeletonAvatarCls}-lg\`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
    [\`\${skeletonAvatarCls}\${skeletonAvatarCls}-sm\`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
  };
};
const genSkeletonElementInput = token => {
  const {
    controlHeight,
    borderRadiusSM,
    skeletonInputCls,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return {
    [skeletonInputCls]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementInputSize(controlHeight, calc)),
    [\`\${skeletonInputCls}-lg\`]: Object.assign({}, genSkeletonElementInputSize(controlHeightLG, calc)),
    [\`\${skeletonInputCls}-sm\`]: Object.assign({}, genSkeletonElementInputSize(controlHeightSM, calc))
  };
};
const genSkeletonElementImageSize = size => Object.assign({
  width: size
}, genSkeletonElementCommonSize(size));
const genSkeletonElementImage = token => {
  const {
    skeletonImageCls,
    imageSizeBase,
    gradientFromColor,
    borderRadiusSM,
    calc
  } = token;
  return {
    [skeletonImageCls]: Object.assign(Object.assign({
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      verticalAlign: 'middle',
      background: gradientFromColor,
      borderRadius: borderRadiusSM
    }, genSkeletonElementImageSize(calc(imageSizeBase).mul(2).equal())), {
      [\`\${skeletonImageCls}-path\`]: {
        fill: '#bfbfbf'
      },
      [\`\${skeletonImageCls}-svg\`]: Object.assign(Object.assign({}, genSkeletonElementImageSize(imageSizeBase)), {
        maxWidth: calc(imageSizeBase).mul(4).equal(),
        maxHeight: calc(imageSizeBase).mul(4).equal()
      }),
      [\`\${skeletonImageCls}-svg\${skeletonImageCls}-svg-circle\`]: {
        borderRadius: '50%'
      }
    }),
    [\`\${skeletonImageCls}\${skeletonImageCls}-circle\`]: {
      borderRadius: '50%'
    }
  };
};
const genSkeletonElementButtonShape = (token, size, buttonCls) => {
  const {
    skeletonButtonCls
  } = token;
  return {
    [\`\${buttonCls}\${skeletonButtonCls}-circle\`]: {
      width: size,
      minWidth: size,
      borderRadius: '50%'
    },
    [\`\${buttonCls}\${skeletonButtonCls}-round\`]: {
      borderRadius: size
    }
  };
};
const genSkeletonElementButtonSize = (size, calc) => Object.assign({
  width: calc(size).mul(2).equal(),
  minWidth: calc(size).mul(2).equal()
}, genSkeletonElementCommonSize(size));
const genSkeletonElementButton = token => {
  const {
    borderRadiusSM,
    skeletonButtonCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    calc
  } = token;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [skeletonButtonCls]: Object.assign({
      display: 'inline-block',
      verticalAlign: 'top',
      background: gradientFromColor,
      borderRadius: borderRadiusSM,
      width: calc(controlHeight).mul(2).equal(),
      minWidth: calc(controlHeight).mul(2).equal()
    }, genSkeletonElementButtonSize(controlHeight, calc))
  }, genSkeletonElementButtonShape(token, controlHeight, skeletonButtonCls)), {
    [\`\${skeletonButtonCls}-lg\`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightLG, calc))
  }), genSkeletonElementButtonShape(token, controlHeightLG, \`\${skeletonButtonCls}-lg\`)), {
    [\`\${skeletonButtonCls}-sm\`]: Object.assign({}, genSkeletonElementButtonSize(controlHeightSM, calc))
  }), genSkeletonElementButtonShape(token, controlHeightSM, \`\${skeletonButtonCls}-sm\`));
};
// =============================== Base ===============================
const genBaseStyle = token => {
  const {
    componentCls,
    skeletonAvatarCls,
    skeletonTitleCls,
    skeletonParagraphCls,
    skeletonButtonCls,
    skeletonInputCls,
    skeletonImageCls,
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    gradientFromColor,
    padding,
    marginSM,
    borderRadius,
    titleHeight,
    blockRadius,
    paragraphLiHeight,
    controlHeightXS,
    paragraphMarginTop
  } = token;
  return {
    [componentCls]: {
      display: 'table',
      width: '100%',
      [\`\${componentCls}-header\`]: {
        display: 'table-cell',
        paddingInlineEnd: padding,
        verticalAlign: 'top',
        // Avatar
        [skeletonAvatarCls]: Object.assign({
          display: 'inline-block',
          verticalAlign: 'top',
          background: gradientFromColor
        }, genSkeletonElementAvatarSize(controlHeight)),
        [\`\${skeletonAvatarCls}-circle\`]: {
          borderRadius: '50%'
        },
        [\`\${skeletonAvatarCls}-lg\`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightLG)),
        [\`\${skeletonAvatarCls}-sm\`]: Object.assign({}, genSkeletonElementAvatarSize(controlHeightSM))
      },
      [\`\${componentCls}-content\`]: {
        display: 'table-cell',
        width: '100%',
        verticalAlign: 'top',
        // Title
        [skeletonTitleCls]: {
          width: '100%',
          height: titleHeight,
          background: gradientFromColor,
          borderRadius: blockRadius,
          [\`+ \${skeletonParagraphCls}\`]: {
            marginBlockStart: controlHeightSM
          }
        },
        // paragraph
        [skeletonParagraphCls]: {
          padding: 0,
          '> li': {
            width: '100%',
            height: paragraphLiHeight,
            listStyle: 'none',
            background: gradientFromColor,
            borderRadius: blockRadius,
            '+ li': {
              marginBlockStart: controlHeightXS
            }
          }
        },
        [\`\${skeletonParagraphCls}> li:last-child:not(:first-child):not(:nth-child(2))\`]: {
          width: '61%'
        }
      },
      [\`&-round \${componentCls}-content\`]: {
        [\`\${skeletonTitleCls}, \${skeletonParagraphCls} > li\`]: {
          borderRadius
        }
      }
    },
    [\`\${componentCls}-with-avatar \${componentCls}-content\`]: {
      // Title
      [skeletonTitleCls]: {
        marginBlockStart: marginSM,
        [\`+ \${skeletonParagraphCls}\`]: {
          marginBlockStart: paragraphMarginTop
        }
      }
    },
    // Skeleton element
    [\`\${componentCls}\${componentCls}-element\`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: 'inline-block',
      width: 'auto'
    }, genSkeletonElementButton(token)), genSkeletonElementAvatar(token)), genSkeletonElementInput(token)), genSkeletonElementImage(token)),
    // Skeleton Block Button, Input
    [\`\${componentCls}\${componentCls}-block\`]: {
      width: '100%',
      [skeletonButtonCls]: {
        width: '100%'
      },
      [skeletonInputCls]: {
        width: '100%'
      }
    },
    // With active animation
    [\`\${componentCls}\${componentCls}-active\`]: {
      [\`
        \${skeletonTitleCls},
        \${skeletonParagraphCls} > li,
        \${skeletonAvatarCls},
        \${skeletonButtonCls},
        \${skeletonInputCls},
        \${skeletonImageCls}
      \`]: Object.assign({}, genSkeletonColor(token))
    }
  };
};
// ============================== Export ==============================
const prepareComponentToken = token => {
  const {
    colorFillContent,
    colorFill
  } = token;
  const gradientFromColor = colorFillContent;
  const gradientToColor = colorFill;
  return {
    color: gradientFromColor,
    colorGradientEnd: gradientToColor,
    gradientFromColor,
    gradientToColor,
    titleHeight: token.controlHeight / 2,
    blockRadius: token.borderRadiusSM,
    paragraphMarginTop: token.marginLG + token.marginXXS,
    paragraphLiHeight: token.controlHeight / 2
  };
};
/* harmony default export */ var skeleton_style = ((0,genStyleUtils/* genStyleHooks */.I$)('Skeleton', token => {
  const {
    componentCls,
    calc
  } = token;
  const skeletonToken = (0,cssinjs_utils_es/* mergeToken */.IX)(token, {
    skeletonAvatarCls: \`\${componentCls}-avatar\`,
    skeletonTitleCls: \`\${componentCls}-title\`,
    skeletonParagraphCls: \`\${componentCls}-paragraph\`,
    skeletonButtonCls: \`\${componentCls}-button\`,
    skeletonInputCls: \`\${componentCls}-input\`,
    skeletonImageCls: \`\${componentCls}-image\`,
    imageSizeBase: calc(token.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: \`linear-gradient(90deg, \${token.gradientFromColor} 25%, \${token.gradientToColor} 37%, \${token.gradientFromColor} 63%)\`,
    skeletonLoadingMotionDuration: '1.4s'
  });
  return [genBaseStyle(skeletonToken)];
}, prepareComponentToken, {
  deprecatedTokens: [['color', 'gradientFromColor'], ['colorGradientEnd', 'gradientToColor']]
}));
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Avatar.js
"use client";







const SkeletonAvatar = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    shape = 'circle',
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls', 'className']);
  const cls = classnames_default()(prefixCls, \`\${prefixCls}-element\`, {
    [\`\${prefixCls}-active\`]: active
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: \`\${prefixCls}-avatar\`,
    shape: shape,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Avatar = (SkeletonAvatar);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Button.js
"use client";







const SkeletonButton = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block = false,
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  const cls = classnames_default()(prefixCls, \`\${prefixCls}-element\`, {
    [\`\${prefixCls}-active\`]: active,
    [\`\${prefixCls}-block\`]: block
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: \`\${prefixCls}-button\`,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Button = (SkeletonButton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Image.js
"use client";





const path = 'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z';
const SkeletonImage = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const cls = classnames_default()(prefixCls, \`\${prefixCls}-element\`, {
    [\`\${prefixCls}-active\`]: active
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(\`\${prefixCls}-image\`, className),
    style: style
  }, /*#__PURE__*/react.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: \`\${prefixCls}-image-svg\`
  }, /*#__PURE__*/react.createElement("title", null, "Image placeholder"), /*#__PURE__*/react.createElement("path", {
    d: path,
    className: \`\${prefixCls}-image-path\`
  })))));
};
/* harmony default export */ var Image = (SkeletonImage);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Input.js
"use client";







const SkeletonInput = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    active,
    block,
    size = 'default'
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const otherProps = (0,omit/* default */.Z)(props, ['prefixCls']);
  const cls = classnames_default()(prefixCls, \`\${prefixCls}-element\`, {
    [\`\${prefixCls}-active\`]: active,
    [\`\${prefixCls}-block\`]: block
  }, className, rootClassName, hashId, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({
    prefixCls: \`\${prefixCls}-input\`,
    size: size
  }, otherProps))));
};
/* harmony default export */ var Input = (SkeletonInput);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Node.js
"use client";





const SkeletonNode = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    rootClassName,
    style,
    active,
    children
  } = props;
  const {
    getPrefixCls
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  const cls = classnames_default()(prefixCls, \`\${prefixCls}-element\`, {
    [\`\${prefixCls}-active\`]: active
  }, hashId, className, rootClassName, cssVarCls);
  return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
    className: cls
  }, /*#__PURE__*/react.createElement("div", {
    className: classnames_default()(\`\${prefixCls}-image\`, className),
    style: style
  }, children)));
};
/* harmony default export */ var Node = (SkeletonNode);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(74902);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Paragraph.js
"use client";




const getWidth = (index, props) => {
  const {
    width,
    rows = 2
  } = props;
  if (Array.isArray(width)) {
    return width[index];
  }
  // last paragraph
  if (rows - 1 === index) {
    return width;
  }
  return undefined;
};
const Paragraph = props => {
  const {
    prefixCls,
    className,
    style,
    rows
  } = props;
  const rowList = (0,toConsumableArray/* default */.Z)(new Array(rows)).map((_, index) => (
  /*#__PURE__*/
  // eslint-disable-next-line react/no-array-index-key
  react.createElement("li", {
    key: index,
    style: {
      width: getWidth(index, props)
    }
  })));
  return /*#__PURE__*/react.createElement("ul", {
    className: classnames_default()(prefixCls, className),
    style: style
  }, rowList);
};
/* harmony default export */ var skeleton_Paragraph = (Paragraph);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Title.js
"use client";

/* eslint-disable jsx-a11y/heading-has-content */


const Title = _ref => {
  let {
    prefixCls,
    className,
    width,
    style
  } = _ref;
  return (
    /*#__PURE__*/
    // biome-ignore lint/a11y/useHeadingContent: HOC here
    react.createElement("h3", {
      className: classnames_default()(prefixCls, className),
      style: Object.assign({
        width
      }, style)
    })
  );
};
/* harmony default export */ var skeleton_Title = (Title);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/Skeleton.js
"use client";













function getComponentProps(prop) {
  if (prop && typeof prop === 'object') {
    return prop;
  }
  return {};
}
function getAvatarBasicProps(hasTitle, hasParagraph) {
  if (hasTitle && !hasParagraph) {
    // Square avatar
    return {
      size: 'large',
      shape: 'square'
    };
  }
  return {
    size: 'large',
    shape: 'circle'
  };
}
function getTitleBasicProps(hasAvatar, hasParagraph) {
  if (!hasAvatar && hasParagraph) {
    return {
      width: '38%'
    };
  }
  if (hasAvatar && hasParagraph) {
    return {
      width: '50%'
    };
  }
  return {};
}
function getParagraphBasicProps(hasAvatar, hasTitle) {
  const basicProps = {};
  // Width
  if (!hasAvatar || !hasTitle) {
    basicProps.width = '61%';
  }
  // Rows
  if (!hasAvatar && hasTitle) {
    basicProps.rows = 3;
  } else {
    basicProps.rows = 2;
  }
  return basicProps;
}
const Skeleton = props => {
  const {
    prefixCls: customizePrefixCls,
    loading,
    className,
    rootClassName,
    style,
    children,
    avatar = false,
    title = true,
    paragraph = true,
    active,
    round
  } = props;
  const {
    getPrefixCls,
    direction,
    skeleton
  } = react.useContext(context/* ConfigContext */.E_);
  const prefixCls = getPrefixCls('skeleton', customizePrefixCls);
  const [wrapCSSVar, hashId, cssVarCls] = skeleton_style(prefixCls);
  if (loading || !('loading' in props)) {
    const hasAvatar = !!avatar;
    const hasTitle = !!title;
    const hasParagraph = !!paragraph;
    // Avatar
    let avatarNode;
    if (hasAvatar) {
      const avatarProps = Object.assign(Object.assign({
        prefixCls: \`\${prefixCls}-avatar\`
      }, getAvatarBasicProps(hasTitle, hasParagraph)), getComponentProps(avatar));
      // We direct use SkeletonElement as avatar in skeleton internal.
      avatarNode = /*#__PURE__*/react.createElement("div", {
        className: \`\${prefixCls}-header\`
      }, /*#__PURE__*/react.createElement(skeleton_Element, Object.assign({}, avatarProps)));
    }
    let contentNode;
    if (hasTitle || hasParagraph) {
      // Title
      let $title;
      if (hasTitle) {
        const titleProps = Object.assign(Object.assign({
          prefixCls: \`\${prefixCls}-title\`
        }, getTitleBasicProps(hasAvatar, hasParagraph)), getComponentProps(title));
        $title = /*#__PURE__*/react.createElement(skeleton_Title, Object.assign({}, titleProps));
      }
      // Paragraph
      let paragraphNode;
      if (hasParagraph) {
        const paragraphProps = Object.assign(Object.assign({
          prefixCls: \`\${prefixCls}-paragraph\`
        }, getParagraphBasicProps(hasAvatar, hasTitle)), getComponentProps(paragraph));
        paragraphNode = /*#__PURE__*/react.createElement(skeleton_Paragraph, Object.assign({}, paragraphProps));
      }
      contentNode = /*#__PURE__*/react.createElement("div", {
        className: \`\${prefixCls}-content\`
      }, $title, paragraphNode);
    }
    const cls = classnames_default()(prefixCls, {
      [\`\${prefixCls}-with-avatar\`]: hasAvatar,
      [\`\${prefixCls}-active\`]: active,
      [\`\${prefixCls}-rtl\`]: direction === 'rtl',
      [\`\${prefixCls}-round\`]: round
    }, skeleton === null || skeleton === void 0 ? void 0 : skeleton.className, className, rootClassName, hashId, cssVarCls);
    return wrapCSSVar(/*#__PURE__*/react.createElement("div", {
      className: cls,
      style: Object.assign(Object.assign({}, skeleton === null || skeleton === void 0 ? void 0 : skeleton.style), style)
    }, avatarNode, contentNode));
  }
  return children !== null && children !== void 0 ? children : null;
};
Skeleton.Button = Button;
Skeleton.Avatar = Avatar;
Skeleton.Input = Input;
Skeleton.Image = Image;
Skeleton.Node = Node;
if (false) {}
/* harmony default export */ var skeleton_Skeleton = (Skeleton);
;// CONCATENATED MODULE: ./node_modules/antd/es/skeleton/index.js
"use client";


/* harmony default export */ var skeleton = (skeleton_Skeleton);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0Esa0JBQWtCLE1BQWM7QUFDaEMsa0JBQWtCLE1BQWM7QUFDaEMsaUJBQWlCLEtBQWE7QUFDOUIsaUJBQWlCLEtBQWE7QUFDOUIsZ0JBQWdCLElBQVk7QUFDNUIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDO0FBQ0Qsc0RBQWUsUUFBUSxFOztBQzNJdkI7O0FBRWtDO0FBQ2xDLDZDQUFlLGlCQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vRWxlbWVudC5qcz8zMDljIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NrZWxldG9uL3N0eWxlL2luZGV4LmpzP2ZhNTMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vQXZhdGFyLmpzPzUxMmMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vQnV0dG9uLmpzPzdjNjciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vSW1hZ2UuanM/NzEzNyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9za2VsZXRvbi9JbnB1dC5qcz80MTQwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NrZWxldG9uL05vZGUuanM/ZDMxMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9za2VsZXRvbi9QYXJhZ3JhcGguanM/MWQ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9lcy9za2VsZXRvbi9UaXRsZS5qcz85ZjYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2VzL3NrZWxldG9uL1NrZWxldG9uLmpzP2FhOGEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvZXMvc2tlbGV0b24vaW5kZXguanM/YzU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5jb25zdCBFbGVtZW50ID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzdHlsZSxcbiAgICBzaXplLFxuICAgIHNoYXBlXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgc2l6ZUNscyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtwcmVmaXhDbHN9LWxnYF06IHNpemUgPT09ICdsYXJnZScsXG4gICAgW2Ake3ByZWZpeENsc30tc21gXTogc2l6ZSA9PT0gJ3NtYWxsJ1xuICB9KTtcbiAgY29uc3Qgc2hhcGVDbHMgPSBjbGFzc05hbWVzKHtcbiAgICBbYCR7cHJlZml4Q2xzfS1jaXJjbGVgXTogc2hhcGUgPT09ICdjaXJjbGUnLFxuICAgIFtgJHtwcmVmaXhDbHN9LXNxdWFyZWBdOiBzaGFwZSA9PT0gJ3NxdWFyZScsXG4gICAgW2Ake3ByZWZpeENsc30tcm91bmRgXTogc2hhcGUgPT09ICdyb3VuZCdcbiAgfSk7XG4gIGNvbnN0IHNpemVTdHlsZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gdHlwZW9mIHNpemUgPT09ICdudW1iZXInID8ge1xuICAgIHdpZHRoOiBzaXplLFxuICAgIGhlaWdodDogc2l6ZSxcbiAgICBsaW5lSGVpZ2h0OiBgJHtzaXplfXB4YFxuICB9IDoge30sIFtzaXplXSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhwcmVmaXhDbHMsIHNpemVDbHMsIHNoYXBlQ2xzLCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNpemVTdHlsZSksIHN0eWxlKVxuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBFbGVtZW50OyIsImltcG9ydCB7IEtleWZyYW1lcywgdW5pdCB9IGZyb20gJ0BhbnQtZGVzaWduL2Nzc2luanMnO1xuaW1wb3J0IHsgZ2VuU3R5bGVIb29rcywgbWVyZ2VUb2tlbiB9IGZyb20gJy4uLy4uL3RoZW1lL2ludGVybmFsJztcbmNvbnN0IHNrZWxldG9uQ2xzTG9hZGluZyA9IG5ldyBLZXlmcmFtZXMoYGFudC1za2VsZXRvbi1sb2FkaW5nYCwge1xuICAnMCUnOiB7XG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnMTAwJSA1MCUnXG4gIH0sXG4gICcxMDAlJzoge1xuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJzAgNTAlJ1xuICB9XG59KTtcbmNvbnN0IGdlblNrZWxldG9uRWxlbWVudENvbW1vblNpemUgPSBzaXplID0+ICh7XG4gIGhlaWdodDogc2l6ZSxcbiAgbGluZUhlaWdodDogdW5pdChzaXplKVxufSk7XG5jb25zdCBnZW5Ta2VsZXRvbkVsZW1lbnRBdmF0YXJTaXplID0gc2l6ZSA9PiBPYmplY3QuYXNzaWduKHtcbiAgd2lkdGg6IHNpemVcbn0sIGdlblNrZWxldG9uRWxlbWVudENvbW1vblNpemUoc2l6ZSkpO1xuY29uc3QgZ2VuU2tlbGV0b25Db2xvciA9IHRva2VuID0+ICh7XG4gIGJhY2tncm91bmQ6IHRva2VuLnNrZWxldG9uTG9hZGluZ0JhY2tncm91bmQsXG4gIGJhY2tncm91bmRTaXplOiAnNDAwJSAxMDAlJyxcbiAgYW5pbWF0aW9uTmFtZTogc2tlbGV0b25DbHNMb2FkaW5nLFxuICBhbmltYXRpb25EdXJhdGlvbjogdG9rZW4uc2tlbGV0b25Mb2FkaW5nTW90aW9uRHVyYXRpb24sXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXG4gIGFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50OiAnaW5maW5pdGUnXG59KTtcbmNvbnN0IGdlblNrZWxldG9uRWxlbWVudElucHV0U2l6ZSA9IChzaXplLCBjYWxjKSA9PiBPYmplY3QuYXNzaWduKHtcbiAgd2lkdGg6IGNhbGMoc2l6ZSkubXVsKDUpLmVxdWFsKCksXG4gIG1pbldpZHRoOiBjYWxjKHNpemUpLm11bCg1KS5lcXVhbCgpXG59LCBnZW5Ta2VsZXRvbkVsZW1lbnRDb21tb25TaXplKHNpemUpKTtcbmNvbnN0IGdlblNrZWxldG9uRWxlbWVudEF2YXRhciA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIHNrZWxldG9uQXZhdGFyQ2xzLFxuICAgIGdyYWRpZW50RnJvbUNvbG9yLFxuICAgIGNvbnRyb2xIZWlnaHQsXG4gICAgY29udHJvbEhlaWdodExHLFxuICAgIGNvbnRyb2xIZWlnaHRTTVxuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW3NrZWxldG9uQXZhdGFyQ2xzXTogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgYmFja2dyb3VuZDogZ3JhZGllbnRGcm9tQ29sb3JcbiAgICB9LCBnZW5Ta2VsZXRvbkVsZW1lbnRBdmF0YXJTaXplKGNvbnRyb2xIZWlnaHQpKSxcbiAgICBbYCR7c2tlbGV0b25BdmF0YXJDbHN9JHtza2VsZXRvbkF2YXRhckNsc30tY2lyY2xlYF06IHtcbiAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICB9LFxuICAgIFtgJHtza2VsZXRvbkF2YXRhckNsc30ke3NrZWxldG9uQXZhdGFyQ2xzfS1sZ2BdOiBPYmplY3QuYXNzaWduKHt9LCBnZW5Ta2VsZXRvbkVsZW1lbnRBdmF0YXJTaXplKGNvbnRyb2xIZWlnaHRMRykpLFxuICAgIFtgJHtza2VsZXRvbkF2YXRhckNsc30ke3NrZWxldG9uQXZhdGFyQ2xzfS1zbWBdOiBPYmplY3QuYXNzaWduKHt9LCBnZW5Ta2VsZXRvbkVsZW1lbnRBdmF0YXJTaXplKGNvbnRyb2xIZWlnaHRTTSkpXG4gIH07XG59O1xuY29uc3QgZ2VuU2tlbGV0b25FbGVtZW50SW5wdXQgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb250cm9sSGVpZ2h0LFxuICAgIGJvcmRlclJhZGl1c1NNLFxuICAgIHNrZWxldG9uSW5wdXRDbHMsXG4gICAgY29udHJvbEhlaWdodExHLFxuICAgIGNvbnRyb2xIZWlnaHRTTSxcbiAgICBncmFkaWVudEZyb21Db2xvcixcbiAgICBjYWxjXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbc2tlbGV0b25JbnB1dENsc106IE9iamVjdC5hc3NpZ24oe1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiAndG9wJyxcbiAgICAgIGJhY2tncm91bmQ6IGdyYWRpZW50RnJvbUNvbG9yLFxuICAgICAgYm9yZGVyUmFkaXVzOiBib3JkZXJSYWRpdXNTTVxuICAgIH0sIGdlblNrZWxldG9uRWxlbWVudElucHV0U2l6ZShjb250cm9sSGVpZ2h0LCBjYWxjKSksXG4gICAgW2Ake3NrZWxldG9uSW5wdXRDbHN9LWxnYF06IE9iamVjdC5hc3NpZ24oe30sIGdlblNrZWxldG9uRWxlbWVudElucHV0U2l6ZShjb250cm9sSGVpZ2h0TEcsIGNhbGMpKSxcbiAgICBbYCR7c2tlbGV0b25JbnB1dENsc30tc21gXTogT2JqZWN0LmFzc2lnbih7fSwgZ2VuU2tlbGV0b25FbGVtZW50SW5wdXRTaXplKGNvbnRyb2xIZWlnaHRTTSwgY2FsYykpXG4gIH07XG59O1xuY29uc3QgZ2VuU2tlbGV0b25FbGVtZW50SW1hZ2VTaXplID0gc2l6ZSA9PiBPYmplY3QuYXNzaWduKHtcbiAgd2lkdGg6IHNpemVcbn0sIGdlblNrZWxldG9uRWxlbWVudENvbW1vblNpemUoc2l6ZSkpO1xuY29uc3QgZ2VuU2tlbGV0b25FbGVtZW50SW1hZ2UgPSB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBza2VsZXRvbkltYWdlQ2xzLFxuICAgIGltYWdlU2l6ZUJhc2UsXG4gICAgZ3JhZGllbnRGcm9tQ29sb3IsXG4gICAgYm9yZGVyUmFkaXVzU00sXG4gICAgY2FsY1xuICB9ID0gdG9rZW47XG4gIHJldHVybiB7XG4gICAgW3NrZWxldG9uSW1hZ2VDbHNdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICBiYWNrZ3JvdW5kOiBncmFkaWVudEZyb21Db2xvcixcbiAgICAgIGJvcmRlclJhZGl1czogYm9yZGVyUmFkaXVzU01cbiAgICB9LCBnZW5Ta2VsZXRvbkVsZW1lbnRJbWFnZVNpemUoY2FsYyhpbWFnZVNpemVCYXNlKS5tdWwoMikuZXF1YWwoKSkpLCB7XG4gICAgICBbYCR7c2tlbGV0b25JbWFnZUNsc30tcGF0aGBdOiB7XG4gICAgICAgIGZpbGw6ICcjYmZiZmJmJ1xuICAgICAgfSxcbiAgICAgIFtgJHtza2VsZXRvbkltYWdlQ2xzfS1zdmdgXTogT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBnZW5Ta2VsZXRvbkVsZW1lbnRJbWFnZVNpemUoaW1hZ2VTaXplQmFzZSkpLCB7XG4gICAgICAgIG1heFdpZHRoOiBjYWxjKGltYWdlU2l6ZUJhc2UpLm11bCg0KS5lcXVhbCgpLFxuICAgICAgICBtYXhIZWlnaHQ6IGNhbGMoaW1hZ2VTaXplQmFzZSkubXVsKDQpLmVxdWFsKClcbiAgICAgIH0pLFxuICAgICAgW2Ake3NrZWxldG9uSW1hZ2VDbHN9LXN2ZyR7c2tlbGV0b25JbWFnZUNsc30tc3ZnLWNpcmNsZWBdOiB7XG4gICAgICAgIGJvcmRlclJhZGl1czogJzUwJSdcbiAgICAgIH1cbiAgICB9KSxcbiAgICBbYCR7c2tlbGV0b25JbWFnZUNsc30ke3NrZWxldG9uSW1hZ2VDbHN9LWNpcmNsZWBdOiB7XG4gICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgfVxuICB9O1xufTtcbmNvbnN0IGdlblNrZWxldG9uRWxlbWVudEJ1dHRvblNoYXBlID0gKHRva2VuLCBzaXplLCBidXR0b25DbHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHNrZWxldG9uQnV0dG9uQ2xzXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbYCR7YnV0dG9uQ2xzfSR7c2tlbGV0b25CdXR0b25DbHN9LWNpcmNsZWBdOiB7XG4gICAgICB3aWR0aDogc2l6ZSxcbiAgICAgIG1pbldpZHRoOiBzaXplLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJ1xuICAgIH0sXG4gICAgW2Ake2J1dHRvbkNsc30ke3NrZWxldG9uQnV0dG9uQ2xzfS1yb3VuZGBdOiB7XG4gICAgICBib3JkZXJSYWRpdXM6IHNpemVcbiAgICB9XG4gIH07XG59O1xuY29uc3QgZ2VuU2tlbGV0b25FbGVtZW50QnV0dG9uU2l6ZSA9IChzaXplLCBjYWxjKSA9PiBPYmplY3QuYXNzaWduKHtcbiAgd2lkdGg6IGNhbGMoc2l6ZSkubXVsKDIpLmVxdWFsKCksXG4gIG1pbldpZHRoOiBjYWxjKHNpemUpLm11bCgyKS5lcXVhbCgpXG59LCBnZW5Ta2VsZXRvbkVsZW1lbnRDb21tb25TaXplKHNpemUpKTtcbmNvbnN0IGdlblNrZWxldG9uRWxlbWVudEJ1dHRvbiA9IHRva2VuID0+IHtcbiAgY29uc3Qge1xuICAgIGJvcmRlclJhZGl1c1NNLFxuICAgIHNrZWxldG9uQnV0dG9uQ2xzLFxuICAgIGNvbnRyb2xIZWlnaHQsXG4gICAgY29udHJvbEhlaWdodExHLFxuICAgIGNvbnRyb2xIZWlnaHRTTSxcbiAgICBncmFkaWVudEZyb21Db2xvcixcbiAgICBjYWxjXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgW3NrZWxldG9uQnV0dG9uQ2xzXTogT2JqZWN0LmFzc2lnbih7XG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgYmFja2dyb3VuZDogZ3JhZGllbnRGcm9tQ29sb3IsXG4gICAgICBib3JkZXJSYWRpdXM6IGJvcmRlclJhZGl1c1NNLFxuICAgICAgd2lkdGg6IGNhbGMoY29udHJvbEhlaWdodCkubXVsKDIpLmVxdWFsKCksXG4gICAgICBtaW5XaWR0aDogY2FsYyhjb250cm9sSGVpZ2h0KS5tdWwoMikuZXF1YWwoKVxuICAgIH0sIGdlblNrZWxldG9uRWxlbWVudEJ1dHRvblNpemUoY29udHJvbEhlaWdodCwgY2FsYykpXG4gIH0sIGdlblNrZWxldG9uRWxlbWVudEJ1dHRvblNoYXBlKHRva2VuLCBjb250cm9sSGVpZ2h0LCBza2VsZXRvbkJ1dHRvbkNscykpLCB7XG4gICAgW2Ake3NrZWxldG9uQnV0dG9uQ2xzfS1sZ2BdOiBPYmplY3QuYXNzaWduKHt9LCBnZW5Ta2VsZXRvbkVsZW1lbnRCdXR0b25TaXplKGNvbnRyb2xIZWlnaHRMRywgY2FsYykpXG4gIH0pLCBnZW5Ta2VsZXRvbkVsZW1lbnRCdXR0b25TaGFwZSh0b2tlbiwgY29udHJvbEhlaWdodExHLCBgJHtza2VsZXRvbkJ1dHRvbkNsc30tbGdgKSksIHtcbiAgICBbYCR7c2tlbGV0b25CdXR0b25DbHN9LXNtYF06IE9iamVjdC5hc3NpZ24oe30sIGdlblNrZWxldG9uRWxlbWVudEJ1dHRvblNpemUoY29udHJvbEhlaWdodFNNLCBjYWxjKSlcbiAgfSksIGdlblNrZWxldG9uRWxlbWVudEJ1dHRvblNoYXBlKHRva2VuLCBjb250cm9sSGVpZ2h0U00sIGAke3NrZWxldG9uQnV0dG9uQ2xzfS1zbWApKTtcbn07XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IEJhc2UgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuY29uc3QgZ2VuQmFzZVN0eWxlID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29tcG9uZW50Q2xzLFxuICAgIHNrZWxldG9uQXZhdGFyQ2xzLFxuICAgIHNrZWxldG9uVGl0bGVDbHMsXG4gICAgc2tlbGV0b25QYXJhZ3JhcGhDbHMsXG4gICAgc2tlbGV0b25CdXR0b25DbHMsXG4gICAgc2tlbGV0b25JbnB1dENscyxcbiAgICBza2VsZXRvbkltYWdlQ2xzLFxuICAgIGNvbnRyb2xIZWlnaHQsXG4gICAgY29udHJvbEhlaWdodExHLFxuICAgIGNvbnRyb2xIZWlnaHRTTSxcbiAgICBncmFkaWVudEZyb21Db2xvcixcbiAgICBwYWRkaW5nLFxuICAgIG1hcmdpblNNLFxuICAgIGJvcmRlclJhZGl1cyxcbiAgICB0aXRsZUhlaWdodCxcbiAgICBibG9ja1JhZGl1cyxcbiAgICBwYXJhZ3JhcGhMaUhlaWdodCxcbiAgICBjb250cm9sSGVpZ2h0WFMsXG4gICAgcGFyYWdyYXBoTWFyZ2luVG9wXG4gIH0gPSB0b2tlbjtcbiAgcmV0dXJuIHtcbiAgICBbY29tcG9uZW50Q2xzXToge1xuICAgICAgZGlzcGxheTogJ3RhYmxlJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBbYCR7Y29tcG9uZW50Q2xzfS1oZWFkZXJgXToge1xuICAgICAgICBkaXNwbGF5OiAndGFibGUtY2VsbCcsXG4gICAgICAgIHBhZGRpbmdJbmxpbmVFbmQ6IHBhZGRpbmcsXG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICd0b3AnLFxuICAgICAgICAvLyBBdmF0YXJcbiAgICAgICAgW3NrZWxldG9uQXZhdGFyQ2xzXTogT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgICAgYmFja2dyb3VuZDogZ3JhZGllbnRGcm9tQ29sb3JcbiAgICAgICAgfSwgZ2VuU2tlbGV0b25FbGVtZW50QXZhdGFyU2l6ZShjb250cm9sSGVpZ2h0KSksXG4gICAgICAgIFtgJHtza2VsZXRvbkF2YXRhckNsc30tY2lyY2xlYF06IHtcbiAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnXG4gICAgICAgIH0sXG4gICAgICAgIFtgJHtza2VsZXRvbkF2YXRhckNsc30tbGdgXTogT2JqZWN0LmFzc2lnbih7fSwgZ2VuU2tlbGV0b25FbGVtZW50QXZhdGFyU2l6ZShjb250cm9sSGVpZ2h0TEcpKSxcbiAgICAgICAgW2Ake3NrZWxldG9uQXZhdGFyQ2xzfS1zbWBdOiBPYmplY3QuYXNzaWduKHt9LCBnZW5Ta2VsZXRvbkVsZW1lbnRBdmF0YXJTaXplKGNvbnRyb2xIZWlnaHRTTSkpXG4gICAgICB9LFxuICAgICAgW2Ake2NvbXBvbmVudENsc30tY29udGVudGBdOiB7XG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1jZWxsJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIC8vIFRpdGxlXG4gICAgICAgIFtza2VsZXRvblRpdGxlQ2xzXToge1xuICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgaGVpZ2h0OiB0aXRsZUhlaWdodCxcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBncmFkaWVudEZyb21Db2xvcixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IGJsb2NrUmFkaXVzLFxuICAgICAgICAgIFtgKyAke3NrZWxldG9uUGFyYWdyYXBoQ2xzfWBdOiB7XG4gICAgICAgICAgICBtYXJnaW5CbG9ja1N0YXJ0OiBjb250cm9sSGVpZ2h0U01cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHBhcmFncmFwaFxuICAgICAgICBbc2tlbGV0b25QYXJhZ3JhcGhDbHNdOiB7XG4gICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAnPiBsaSc6IHtcbiAgICAgICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBoZWlnaHQ6IHBhcmFncmFwaExpSGVpZ2h0LFxuICAgICAgICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmFkaWVudEZyb21Db2xvcixcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogYmxvY2tSYWRpdXMsXG4gICAgICAgICAgICAnKyBsaSc6IHtcbiAgICAgICAgICAgICAgbWFyZ2luQmxvY2tTdGFydDogY29udHJvbEhlaWdodFhTXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbYCR7c2tlbGV0b25QYXJhZ3JhcGhDbHN9PiBsaTpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bnRoLWNoaWxkKDIpKWBdOiB7XG4gICAgICAgICAgd2lkdGg6ICc2MSUnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBbYCYtcm91bmQgJHtjb21wb25lbnRDbHN9LWNvbnRlbnRgXToge1xuICAgICAgICBbYCR7c2tlbGV0b25UaXRsZUNsc30sICR7c2tlbGV0b25QYXJhZ3JhcGhDbHN9ID4gbGlgXToge1xuICAgICAgICAgIGJvcmRlclJhZGl1c1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbYCR7Y29tcG9uZW50Q2xzfS13aXRoLWF2YXRhciAke2NvbXBvbmVudENsc30tY29udGVudGBdOiB7XG4gICAgICAvLyBUaXRsZVxuICAgICAgW3NrZWxldG9uVGl0bGVDbHNdOiB7XG4gICAgICAgIG1hcmdpbkJsb2NrU3RhcnQ6IG1hcmdpblNNLFxuICAgICAgICBbYCsgJHtza2VsZXRvblBhcmFncmFwaENsc31gXToge1xuICAgICAgICAgIG1hcmdpbkJsb2NrU3RhcnQ6IHBhcmFncmFwaE1hcmdpblRvcFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBTa2VsZXRvbiBlbGVtZW50XG4gICAgW2Ake2NvbXBvbmVudENsc30ke2NvbXBvbmVudENsc30tZWxlbWVudGBdOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgd2lkdGg6ICdhdXRvJ1xuICAgIH0sIGdlblNrZWxldG9uRWxlbWVudEJ1dHRvbih0b2tlbikpLCBnZW5Ta2VsZXRvbkVsZW1lbnRBdmF0YXIodG9rZW4pKSwgZ2VuU2tlbGV0b25FbGVtZW50SW5wdXQodG9rZW4pKSwgZ2VuU2tlbGV0b25FbGVtZW50SW1hZ2UodG9rZW4pKSxcbiAgICAvLyBTa2VsZXRvbiBCbG9jayBCdXR0b24sIElucHV0XG4gICAgW2Ake2NvbXBvbmVudENsc30ke2NvbXBvbmVudENsc30tYmxvY2tgXToge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIFtza2VsZXRvbkJ1dHRvbkNsc106IHtcbiAgICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgICAgfSxcbiAgICAgIFtza2VsZXRvbklucHV0Q2xzXToge1xuICAgICAgICB3aWR0aDogJzEwMCUnXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBXaXRoIGFjdGl2ZSBhbmltYXRpb25cbiAgICBbYCR7Y29tcG9uZW50Q2xzfSR7Y29tcG9uZW50Q2xzfS1hY3RpdmVgXToge1xuICAgICAgW2BcbiAgICAgICAgJHtza2VsZXRvblRpdGxlQ2xzfSxcbiAgICAgICAgJHtza2VsZXRvblBhcmFncmFwaENsc30gPiBsaSxcbiAgICAgICAgJHtza2VsZXRvbkF2YXRhckNsc30sXG4gICAgICAgICR7c2tlbGV0b25CdXR0b25DbHN9LFxuICAgICAgICAke3NrZWxldG9uSW5wdXRDbHN9LFxuICAgICAgICAke3NrZWxldG9uSW1hZ2VDbHN9XG4gICAgICBgXTogT2JqZWN0LmFzc2lnbih7fSwgZ2VuU2tlbGV0b25Db2xvcih0b2tlbikpXG4gICAgfVxuICB9O1xufTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSBFeHBvcnQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgY29uc3QgcHJlcGFyZUNvbXBvbmVudFRva2VuID0gdG9rZW4gPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3JGaWxsQ29udGVudCxcbiAgICBjb2xvckZpbGxcbiAgfSA9IHRva2VuO1xuICBjb25zdCBncmFkaWVudEZyb21Db2xvciA9IGNvbG9yRmlsbENvbnRlbnQ7XG4gIGNvbnN0IGdyYWRpZW50VG9Db2xvciA9IGNvbG9yRmlsbDtcbiAgcmV0dXJuIHtcbiAgICBjb2xvcjogZ3JhZGllbnRGcm9tQ29sb3IsXG4gICAgY29sb3JHcmFkaWVudEVuZDogZ3JhZGllbnRUb0NvbG9yLFxuICAgIGdyYWRpZW50RnJvbUNvbG9yLFxuICAgIGdyYWRpZW50VG9Db2xvcixcbiAgICB0aXRsZUhlaWdodDogdG9rZW4uY29udHJvbEhlaWdodCAvIDIsXG4gICAgYmxvY2tSYWRpdXM6IHRva2VuLmJvcmRlclJhZGl1c1NNLFxuICAgIHBhcmFncmFwaE1hcmdpblRvcDogdG9rZW4ubWFyZ2luTEcgKyB0b2tlbi5tYXJnaW5YWFMsXG4gICAgcGFyYWdyYXBoTGlIZWlnaHQ6IHRva2VuLmNvbnRyb2xIZWlnaHQgLyAyXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2VuU3R5bGVIb29rcygnU2tlbGV0b24nLCB0b2tlbiA9PiB7XG4gIGNvbnN0IHtcbiAgICBjb21wb25lbnRDbHMsXG4gICAgY2FsY1xuICB9ID0gdG9rZW47XG4gIGNvbnN0IHNrZWxldG9uVG9rZW4gPSBtZXJnZVRva2VuKHRva2VuLCB7XG4gICAgc2tlbGV0b25BdmF0YXJDbHM6IGAke2NvbXBvbmVudENsc30tYXZhdGFyYCxcbiAgICBza2VsZXRvblRpdGxlQ2xzOiBgJHtjb21wb25lbnRDbHN9LXRpdGxlYCxcbiAgICBza2VsZXRvblBhcmFncmFwaENsczogYCR7Y29tcG9uZW50Q2xzfS1wYXJhZ3JhcGhgLFxuICAgIHNrZWxldG9uQnV0dG9uQ2xzOiBgJHtjb21wb25lbnRDbHN9LWJ1dHRvbmAsXG4gICAgc2tlbGV0b25JbnB1dENsczogYCR7Y29tcG9uZW50Q2xzfS1pbnB1dGAsXG4gICAgc2tlbGV0b25JbWFnZUNsczogYCR7Y29tcG9uZW50Q2xzfS1pbWFnZWAsXG4gICAgaW1hZ2VTaXplQmFzZTogY2FsYyh0b2tlbi5jb250cm9sSGVpZ2h0KS5tdWwoMS41KS5lcXVhbCgpLFxuICAgIGJvcmRlclJhZGl1czogMTAwLFxuICAgIC8vIExhcmdlIG51bWJlciB0byBtYWtlIGNhcHN1bGUgc2hhcGVcbiAgICBza2VsZXRvbkxvYWRpbmdCYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAke3Rva2VuLmdyYWRpZW50RnJvbUNvbG9yfSAyNSUsICR7dG9rZW4uZ3JhZGllbnRUb0NvbG9yfSAzNyUsICR7dG9rZW4uZ3JhZGllbnRGcm9tQ29sb3J9IDYzJSlgLFxuICAgIHNrZWxldG9uTG9hZGluZ01vdGlvbkR1cmF0aW9uOiAnMS40cydcbiAgfSk7XG4gIHJldHVybiBbZ2VuQmFzZVN0eWxlKHNrZWxldG9uVG9rZW4pXTtcbn0sIHByZXBhcmVDb21wb25lbnRUb2tlbiwge1xuICBkZXByZWNhdGVkVG9rZW5zOiBbWydjb2xvcicsICdncmFkaWVudEZyb21Db2xvciddLCBbJ2NvbG9yR3JhZGllbnRFbmQnLCAnZ3JhZGllbnRUb0NvbG9yJ11dXG59KTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgb21pdCBmcm9tIFwicmMtdXRpbC9lcy9vbWl0XCI7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBFbGVtZW50IGZyb20gJy4vRWxlbWVudCc7XG5pbXBvcnQgdXNlU3R5bGUgZnJvbSAnLi9zdHlsZSc7XG5jb25zdCBTa2VsZXRvbkF2YXRhciA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSxcbiAgICByb290Q2xhc3NOYW1lLFxuICAgIGFjdGl2ZSxcbiAgICBzaGFwZSA9ICdjaXJjbGUnLFxuICAgIHNpemUgPSAnZGVmYXVsdCdcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzXG4gIH0gPSBSZWFjdC51c2VDb250ZXh0KENvbmZpZ0NvbnRleHQpO1xuICBjb25zdCBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3NrZWxldG9uJywgY3VzdG9taXplUHJlZml4Q2xzKTtcbiAgY29uc3QgW3dyYXBDU1NWYXIsIGhhc2hJZCwgY3NzVmFyQ2xzXSA9IHVzZVN0eWxlKHByZWZpeENscyk7XG4gIGNvbnN0IG90aGVyUHJvcHMgPSBvbWl0KHByb3BzLCBbJ3ByZWZpeENscycsICdjbGFzc05hbWUnXSk7XG4gIGNvbnN0IGNscyA9IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBgJHtwcmVmaXhDbHN9LWVsZW1lbnRgLCB7XG4gICAgW2Ake3ByZWZpeENsc30tYWN0aXZlYF06IGFjdGl2ZVxuICB9LCBjbGFzc05hbWUsIHJvb3RDbGFzc05hbWUsIGhhc2hJZCwgY3NzVmFyQ2xzKTtcbiAgcmV0dXJuIHdyYXBDU1NWYXIoLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xzXG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgIHByZWZpeENsczogYCR7cHJlZml4Q2xzfS1hdmF0YXJgLFxuICAgIHNoYXBlOiBzaGFwZSxcbiAgICBzaXplOiBzaXplXG4gIH0sIG90aGVyUHJvcHMpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uQXZhdGFyOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBvbWl0IGZyb20gXCJyYy11dGlsL2VzL29taXRcIjtcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IFNrZWxldG9uQnV0dG9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHJvb3RDbGFzc05hbWUsXG4gICAgYWN0aXZlLFxuICAgIGJsb2NrID0gZmFsc2UsXG4gICAgc2l6ZSA9ICdkZWZhdWx0J1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnc2tlbGV0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCBbd3JhcENTU1ZhciwgaGFzaElkLCBjc3NWYXJDbHNdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3Qgb3RoZXJQcm9wcyA9IG9taXQocHJvcHMsIFsncHJlZml4Q2xzJ10pO1xuICBjb25zdCBjbHMgPSBjbGFzc05hbWVzKHByZWZpeENscywgYCR7cHJlZml4Q2xzfS1lbGVtZW50YCwge1xuICAgIFtgJHtwcmVmaXhDbHN9LWFjdGl2ZWBdOiBhY3RpdmUsXG4gICAgW2Ake3ByZWZpeENsc30tYmxvY2tgXTogYmxvY2tcbiAgfSwgY2xhc3NOYW1lLCByb290Q2xhc3NOYW1lLCBoYXNoSWQsIGNzc1ZhckNscyk7XG4gIHJldHVybiB3cmFwQ1NTVmFyKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICBwcmVmaXhDbHM6IGAke3ByZWZpeENsc30tYnV0dG9uYCxcbiAgICBzaXplOiBzaXplXG4gIH0sIG90aGVyUHJvcHMpKSkpO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNrZWxldG9uQnV0dG9uOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IHVzZVN0eWxlIGZyb20gJy4vc3R5bGUnO1xuY29uc3QgcGF0aCA9ICdNMzY1LjcxNDI4NiAzMjkuMTQyODU3cTAgNDUuNzE0Mjg2LTMyLjAzNjU3MSA3Ny42Nzc3MTR0LTc3LjY3NzcxNCAzMi4wMzY1NzEtNzcuNjc3NzE0LTMyLjAzNjU3MS0zMi4wMzY1NzEtNzcuNjc3NzE0IDMyLjAzNjU3MS03Ny42Nzc3MTQgNzcuNjc3NzE0LTMyLjAzNjU3MSA3Ny42Nzc3MTQgMzIuMDM2NTcxIDMyLjAzNjU3MSA3Ny42Nzc3MTR6TTk1MC44NTcxNDMgNTQ4LjU3MTQyOWwwIDI1Ni04MDQuNTcxNDI5IDAgMC0xMDkuNzE0Mjg2IDE4Mi44NTcxNDMtMTgyLjg1NzE0MyA5MS40Mjg1NzEgOTEuNDI4NTcxIDI5Mi41NzE0MjktMjkyLjU3MTQyOXpNMTAwNS43MTQyODYgMTQ2LjI4NTcxNGwtOTE0LjI4NTcxNCAwcS03LjQ2MDU3MSAwLTEyLjg3MzE0MyA1LjQxMjU3MXQtNS40MTI1NzEgMTIuODczMTQzbDAgNjk0Ljg1NzE0M3EwIDcuNDYwNTcxIDUuNDEyNTcxIDEyLjg3MzE0M3QxMi44NzMxNDMgNS40MTI1NzFsOTE0LjI4NTcxNCAwcTcuNDYwNTcxIDAgMTIuODczMTQzLTUuNDEyNTcxdDUuNDEyNTcxLTEyLjg3MzE0M2wwLTY5NC44NTcxNDNxMC03LjQ2MDU3MS01LjQxMjU3MS0xMi44NzMxNDN0LTEyLjg3MzE0My01LjQxMjU3MXpNMTA5Ny4xNDI4NTcgMTY0LjU3MTQyOWwwIDY5NC44NTcxNDNxMCAzNy43NDE3MTQtMjYuODQzNDI5IDY0LjU4NTE0M3QtNjQuNTg1MTQzIDI2Ljg0MzQyOWwtOTE0LjI4NTcxNCAwcS0zNy43NDE3MTQgMC02NC41ODUxNDMtMjYuODQzNDI5dC0yNi44NDM0MjktNjQuNTg1MTQzbDAtNjk0Ljg1NzE0M3EwLTM3Ljc0MTcxNCAyNi44NDM0MjktNjQuNTg1MTQzdDY0LjU4NTE0My0yNi44NDM0MjlsOTE0LjI4NTcxNCAwcTM3Ljc0MTcxNCAwIDY0LjU4NTE0MyAyNi44NDM0Mjl0MjYuODQzNDI5IDY0LjU4NTE0M3onO1xuY29uc3QgU2tlbGV0b25JbWFnZSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSxcbiAgICByb290Q2xhc3NOYW1lLFxuICAgIHN0eWxlLFxuICAgIGFjdGl2ZVxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnc2tlbGV0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCBbd3JhcENTU1ZhciwgaGFzaElkLCBjc3NWYXJDbHNdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgY2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGAke3ByZWZpeENsc30tZWxlbWVudGAsIHtcbiAgICBbYCR7cHJlZml4Q2xzfS1hY3RpdmVgXTogYWN0aXZlXG4gIH0sIGNsYXNzTmFtZSwgcm9vdENsYXNzTmFtZSwgaGFzaElkLCBjc3NWYXJDbHMpO1xuICByZXR1cm4gd3JhcENTU1ZhcigvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWltYWdlYCwgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwge1xuICAgIHZpZXdCb3g6IFwiMCAwIDEwOTggMTAyNFwiLFxuICAgIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWltYWdlLXN2Z2BcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0aXRsZVwiLCBudWxsLCBcIkltYWdlIHBsYWNlaG9sZGVyXCIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IHBhdGgsXG4gICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWltYWdlLXBhdGhgXG4gIH0pKSkpKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTa2VsZXRvbkltYWdlOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBvbWl0IGZyb20gXCJyYy11dGlsL2VzL29taXRcIjtcbmltcG9ydCB7IENvbmZpZ0NvbnRleHQgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IFNrZWxldG9uSW5wdXQgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtcbiAgICBwcmVmaXhDbHM6IGN1c3RvbWl6ZVByZWZpeENscyxcbiAgICBjbGFzc05hbWUsXG4gICAgcm9vdENsYXNzTmFtZSxcbiAgICBhY3RpdmUsXG4gICAgYmxvY2ssXG4gICAgc2l6ZSA9ICdkZWZhdWx0J1xuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnc2tlbGV0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCBbd3JhcENTU1ZhciwgaGFzaElkLCBjc3NWYXJDbHNdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3Qgb3RoZXJQcm9wcyA9IG9taXQocHJvcHMsIFsncHJlZml4Q2xzJ10pO1xuICBjb25zdCBjbHMgPSBjbGFzc05hbWVzKHByZWZpeENscywgYCR7cHJlZml4Q2xzfS1lbGVtZW50YCwge1xuICAgIFtgJHtwcmVmaXhDbHN9LWFjdGl2ZWBdOiBhY3RpdmUsXG4gICAgW2Ake3ByZWZpeENsc30tYmxvY2tgXTogYmxvY2tcbiAgfSwgY2xhc3NOYW1lLCByb290Q2xhc3NOYW1lLCBoYXNoSWQsIGNzc1ZhckNscyk7XG4gIHJldHVybiB3cmFwQ1NTVmFyKC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IGNsc1xuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChFbGVtZW50LCBPYmplY3QuYXNzaWduKHtcbiAgICBwcmVmaXhDbHM6IGAke3ByZWZpeENsc30taW5wdXRgLFxuICAgIHNpemU6IHNpemVcbiAgfSwgb3RoZXJQcm9wcykpKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b25JbnB1dDsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmNvbnN0IFNrZWxldG9uTm9kZSA9IHByb3BzID0+IHtcbiAgY29uc3Qge1xuICAgIHByZWZpeENsczogY3VzdG9taXplUHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSxcbiAgICByb290Q2xhc3NOYW1lLFxuICAgIHN0eWxlLFxuICAgIGFjdGl2ZSxcbiAgICBjaGlsZHJlblxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IHtcbiAgICBnZXRQcmVmaXhDbHNcbiAgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29uZmlnQ29udGV4dCk7XG4gIGNvbnN0IHByZWZpeENscyA9IGdldFByZWZpeENscygnc2tlbGV0b24nLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICBjb25zdCBbd3JhcENTU1ZhciwgaGFzaElkLCBjc3NWYXJDbHNdID0gdXNlU3R5bGUocHJlZml4Q2xzKTtcbiAgY29uc3QgY2xzID0gY2xhc3NOYW1lcyhwcmVmaXhDbHMsIGAke3ByZWZpeENsc30tZWxlbWVudGAsIHtcbiAgICBbYCR7cHJlZml4Q2xzfS1hY3RpdmVgXTogYWN0aXZlXG4gIH0sIGhhc2hJZCwgY2xhc3NOYW1lLCByb290Q2xhc3NOYW1lLCBjc3NWYXJDbHMpO1xuICByZXR1cm4gd3JhcENTU1ZhcigvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbHNcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhgJHtwcmVmaXhDbHN9LWltYWdlYCwgY2xhc3NOYW1lKSxcbiAgICBzdHlsZTogc3R5bGVcbiAgfSwgY2hpbGRyZW4pKSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b25Ob2RlOyIsIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheVwiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5jb25zdCBnZXRXaWR0aCA9IChpbmRleCwgcHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHdpZHRoLFxuICAgIHJvd3MgPSAyXG4gIH0gPSBwcm9wcztcbiAgaWYgKEFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgcmV0dXJuIHdpZHRoW2luZGV4XTtcbiAgfVxuICAvLyBsYXN0IHBhcmFncmFwaFxuICBpZiAocm93cyAtIDEgPT09IGluZGV4KSB7XG4gICAgcmV0dXJuIHdpZHRoO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuY29uc3QgUGFyYWdyYXBoID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlZml4Q2xzLFxuICAgIGNsYXNzTmFtZSxcbiAgICBzdHlsZSxcbiAgICByb3dzXG4gIH0gPSBwcm9wcztcbiAgY29uc3Qgcm93TGlzdCA9IF90b0NvbnN1bWFibGVBcnJheShuZXcgQXJyYXkocm93cykpLm1hcCgoXywgaW5kZXgpID0+IChcbiAgLyojX19QVVJFX18qL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tYXJyYXktaW5kZXgta2V5XG4gIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAga2V5OiBpbmRleCxcbiAgICBzdHlsZToge1xuICAgICAgd2lkdGg6IGdldFdpZHRoKGluZGV4LCBwcm9wcylcbiAgICB9XG4gIH0pKSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUpLFxuICAgIHN0eWxlOiBzdHlsZVxuICB9LCByb3dMaXN0KTtcbn07XG5leHBvcnQgZGVmYXVsdCBQYXJhZ3JhcGg7IiwiXCJ1c2UgY2xpZW50XCI7XG5cbi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L2hlYWRpbmctaGFzLWNvbnRlbnQgKi9cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuY29uc3QgVGl0bGUgPSBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBwcmVmaXhDbHMsXG4gICAgY2xhc3NOYW1lLFxuICAgIHdpZHRoLFxuICAgIHN0eWxlXG4gIH0gPSBfcmVmO1xuICByZXR1cm4gKFxuICAgIC8qI19fUFVSRV9fKi9cbiAgICAvLyBiaW9tZS1pZ25vcmUgbGludC9hMTF5L3VzZUhlYWRpbmdDb250ZW50OiBIT0MgaGVyZVxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoM1wiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZXMocHJlZml4Q2xzLCBjbGFzc05hbWUpLFxuICAgICAgc3R5bGU6IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICB3aWR0aFxuICAgICAgfSwgc3R5bGUpXG4gICAgfSlcbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUaXRsZTsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBDb25maWdDb250ZXh0IH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCBTa2VsZXRvbkF2YXRhciBmcm9tICcuL0F2YXRhcic7XG5pbXBvcnQgU2tlbGV0b25CdXR0b24gZnJvbSAnLi9CdXR0b24nO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSAnLi9FbGVtZW50JztcbmltcG9ydCBTa2VsZXRvbkltYWdlIGZyb20gJy4vSW1hZ2UnO1xuaW1wb3J0IFNrZWxldG9uSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgU2tlbGV0b25Ob2RlIGZyb20gJy4vTm9kZSc7XG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gJy4vUGFyYWdyYXBoJztcbmltcG9ydCB1c2VTdHlsZSBmcm9tICcuL3N0eWxlJztcbmltcG9ydCBUaXRsZSBmcm9tICcuL1RpdGxlJztcbmZ1bmN0aW9uIGdldENvbXBvbmVudFByb3BzKHByb3ApIHtcbiAgaWYgKHByb3AgJiYgdHlwZW9mIHByb3AgPT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuZnVuY3Rpb24gZ2V0QXZhdGFyQmFzaWNQcm9wcyhoYXNUaXRsZSwgaGFzUGFyYWdyYXBoKSB7XG4gIGlmIChoYXNUaXRsZSAmJiAhaGFzUGFyYWdyYXBoKSB7XG4gICAgLy8gU3F1YXJlIGF2YXRhclxuICAgIHJldHVybiB7XG4gICAgICBzaXplOiAnbGFyZ2UnLFxuICAgICAgc2hhcGU6ICdzcXVhcmUnXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNpemU6ICdsYXJnZScsXG4gICAgc2hhcGU6ICdjaXJjbGUnXG4gIH07XG59XG5mdW5jdGlvbiBnZXRUaXRsZUJhc2ljUHJvcHMoaGFzQXZhdGFyLCBoYXNQYXJhZ3JhcGgpIHtcbiAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiAnMzglJ1xuICAgIH07XG4gIH1cbiAgaWYgKGhhc0F2YXRhciAmJiBoYXNQYXJhZ3JhcGgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkdGg6ICc1MCUnXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge307XG59XG5mdW5jdGlvbiBnZXRQYXJhZ3JhcGhCYXNpY1Byb3BzKGhhc0F2YXRhciwgaGFzVGl0bGUpIHtcbiAgY29uc3QgYmFzaWNQcm9wcyA9IHt9O1xuICAvLyBXaWR0aFxuICBpZiAoIWhhc0F2YXRhciB8fCAhaGFzVGl0bGUpIHtcbiAgICBiYXNpY1Byb3BzLndpZHRoID0gJzYxJSc7XG4gIH1cbiAgLy8gUm93c1xuICBpZiAoIWhhc0F2YXRhciAmJiBoYXNUaXRsZSkge1xuICAgIGJhc2ljUHJvcHMucm93cyA9IDM7XG4gIH0gZWxzZSB7XG4gICAgYmFzaWNQcm9wcy5yb3dzID0gMjtcbiAgfVxuICByZXR1cm4gYmFzaWNQcm9wcztcbn1cbmNvbnN0IFNrZWxldG9uID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgcHJlZml4Q2xzOiBjdXN0b21pemVQcmVmaXhDbHMsXG4gICAgbG9hZGluZyxcbiAgICBjbGFzc05hbWUsXG4gICAgcm9vdENsYXNzTmFtZSxcbiAgICBzdHlsZSxcbiAgICBjaGlsZHJlbixcbiAgICBhdmF0YXIgPSBmYWxzZSxcbiAgICB0aXRsZSA9IHRydWUsXG4gICAgcGFyYWdyYXBoID0gdHJ1ZSxcbiAgICBhY3RpdmUsXG4gICAgcm91bmRcbiAgfSA9IHByb3BzO1xuICBjb25zdCB7XG4gICAgZ2V0UHJlZml4Q2xzLFxuICAgIGRpcmVjdGlvbixcbiAgICBza2VsZXRvblxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb25maWdDb250ZXh0KTtcbiAgY29uc3QgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdza2VsZXRvbicsIGN1c3RvbWl6ZVByZWZpeENscyk7XG4gIGNvbnN0IFt3cmFwQ1NTVmFyLCBoYXNoSWQsIGNzc1ZhckNsc10gPSB1c2VTdHlsZShwcmVmaXhDbHMpO1xuICBpZiAobG9hZGluZyB8fCAhKCdsb2FkaW5nJyBpbiBwcm9wcykpIHtcbiAgICBjb25zdCBoYXNBdmF0YXIgPSAhIWF2YXRhcjtcbiAgICBjb25zdCBoYXNUaXRsZSA9ICEhdGl0bGU7XG4gICAgY29uc3QgaGFzUGFyYWdyYXBoID0gISFwYXJhZ3JhcGg7XG4gICAgLy8gQXZhdGFyXG4gICAgbGV0IGF2YXRhck5vZGU7XG4gICAgaWYgKGhhc0F2YXRhcikge1xuICAgICAgY29uc3QgYXZhdGFyUHJvcHMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBwcmVmaXhDbHM6IGAke3ByZWZpeENsc30tYXZhdGFyYFxuICAgICAgfSwgZ2V0QXZhdGFyQmFzaWNQcm9wcyhoYXNUaXRsZSwgaGFzUGFyYWdyYXBoKSksIGdldENvbXBvbmVudFByb3BzKGF2YXRhcikpO1xuICAgICAgLy8gV2UgZGlyZWN0IHVzZSBTa2VsZXRvbkVsZW1lbnQgYXMgYXZhdGFyIGluIHNrZWxldG9uIGludGVybmFsLlxuICAgICAgYXZhdGFyTm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWhlYWRlcmBcbiAgICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEVsZW1lbnQsIE9iamVjdC5hc3NpZ24oe30sIGF2YXRhclByb3BzKSkpO1xuICAgIH1cbiAgICBsZXQgY29udGVudE5vZGU7XG4gICAgaWYgKGhhc1RpdGxlIHx8IGhhc1BhcmFncmFwaCkge1xuICAgICAgLy8gVGl0bGVcbiAgICAgIGxldCAkdGl0bGU7XG4gICAgICBpZiAoaGFzVGl0bGUpIHtcbiAgICAgICAgY29uc3QgdGl0bGVQcm9wcyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgcHJlZml4Q2xzOiBgJHtwcmVmaXhDbHN9LXRpdGxlYFxuICAgICAgICB9LCBnZXRUaXRsZUJhc2ljUHJvcHMoaGFzQXZhdGFyLCBoYXNQYXJhZ3JhcGgpKSwgZ2V0Q29tcG9uZW50UHJvcHModGl0bGUpKTtcbiAgICAgICAgJHRpdGxlID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVGl0bGUsIE9iamVjdC5hc3NpZ24oe30sIHRpdGxlUHJvcHMpKTtcbiAgICAgIH1cbiAgICAgIC8vIFBhcmFncmFwaFxuICAgICAgbGV0IHBhcmFncmFwaE5vZGU7XG4gICAgICBpZiAoaGFzUGFyYWdyYXBoKSB7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaFByb3BzID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBwcmVmaXhDbHM6IGAke3ByZWZpeENsc30tcGFyYWdyYXBoYFxuICAgICAgICB9LCBnZXRQYXJhZ3JhcGhCYXNpY1Byb3BzKGhhc0F2YXRhciwgaGFzVGl0bGUpKSwgZ2V0Q29tcG9uZW50UHJvcHMocGFyYWdyYXBoKSk7XG4gICAgICAgIHBhcmFncmFwaE5vZGUgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYXJhZ3JhcGgsIE9iamVjdC5hc3NpZ24oe30sIHBhcmFncmFwaFByb3BzKSk7XG4gICAgICB9XG4gICAgICBjb250ZW50Tm9kZSA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtwcmVmaXhDbHN9LWNvbnRlbnRgXG4gICAgICB9LCAkdGl0bGUsIHBhcmFncmFwaE5vZGUpO1xuICAgIH1cbiAgICBjb25zdCBjbHMgPSBjbGFzc05hbWVzKHByZWZpeENscywge1xuICAgICAgW2Ake3ByZWZpeENsc30td2l0aC1hdmF0YXJgXTogaGFzQXZhdGFyLFxuICAgICAgW2Ake3ByZWZpeENsc30tYWN0aXZlYF06IGFjdGl2ZSxcbiAgICAgIFtgJHtwcmVmaXhDbHN9LXJ0bGBdOiBkaXJlY3Rpb24gPT09ICdydGwnLFxuICAgICAgW2Ake3ByZWZpeENsc30tcm91bmRgXTogcm91bmRcbiAgICB9LCBza2VsZXRvbiA9PT0gbnVsbCB8fCBza2VsZXRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc2tlbGV0b24uY2xhc3NOYW1lLCBjbGFzc05hbWUsIHJvb3RDbGFzc05hbWUsIGhhc2hJZCwgY3NzVmFyQ2xzKTtcbiAgICByZXR1cm4gd3JhcENTU1ZhcigvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNscyxcbiAgICAgIHN0eWxlOiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHNrZWxldG9uID09PSBudWxsIHx8IHNrZWxldG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBza2VsZXRvbi5zdHlsZSksIHN0eWxlKVxuICAgIH0sIGF2YXRhck5vZGUsIGNvbnRlbnROb2RlKSk7XG4gIH1cbiAgcmV0dXJuIGNoaWxkcmVuICE9PSBudWxsICYmIGNoaWxkcmVuICE9PSB2b2lkIDAgPyBjaGlsZHJlbiA6IG51bGw7XG59O1xuU2tlbGV0b24uQnV0dG9uID0gU2tlbGV0b25CdXR0b247XG5Ta2VsZXRvbi5BdmF0YXIgPSBTa2VsZXRvbkF2YXRhcjtcblNrZWxldG9uLklucHV0ID0gU2tlbGV0b25JbnB1dDtcblNrZWxldG9uLkltYWdlID0gU2tlbGV0b25JbWFnZTtcblNrZWxldG9uLk5vZGUgPSBTa2VsZXRvbk5vZGU7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBTa2VsZXRvbi5kaXNwbGF5TmFtZSA9ICdTa2VsZXRvbic7XG59XG5leHBvcnQgZGVmYXVsdCBTa2VsZXRvbjsiLCJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFNrZWxldG9uIGZyb20gJy4vU2tlbGV0b24nO1xuZXhwb3J0IGRlZmF1bHQgU2tlbGV0b247Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///48054
`)}}]);
