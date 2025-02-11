"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[562],{2490:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval(`__webpack_require__.r(__webpack_exports__);
/* harmony import */ var F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97857);
/* harmony import */ var F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5574);
/* harmony import */ var F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74656);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(65233);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(23323);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);






var Option = antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.Option;
var PriceInput = function PriceInput(props) {
  var id = props.id,
    _props$value = props.value,
    value = _props$value === void 0 ? {} : _props$value,
    onChange = props.onChange;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
    _useState2 = F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
    number = _useState2[0],
    setNumber = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('rmb'),
    _useState4 = F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
    currency = _useState4[0],
    setCurrency = _useState4[1];
  var triggerChange = function triggerChange(changedValue) {
    onChange === null || onChange === void 0 || onChange(F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()(F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0___default()({
      number: number,
      currency: currency
    }, value), changedValue));
  };
  var onNumberChange = function onNumberChange(e) {
    var newNumber = parseInt(e.target.value || '0', 10);
    if (Number.isNaN(number)) {
      return;
    }
    if (!('number' in value)) {
      setNumber(newNumber);
    }
    triggerChange({
      number: newNumber
    });
  };
  var onCurrencyChange = function onCurrencyChange(newCurrency) {
    if (!('currency' in value)) {
      setCurrency(newCurrency);
    }
    triggerChange({
      currency: newCurrency
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
    id: id,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      type: "text",
      value: value.number || number,
      onChange: onNumberChange,
      style: {
        width: 100
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
      value: value.currency || currency,
      style: {
        width: 80,
        margin: '0 8px'
      },
      onChange: onCurrencyChange,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Option, {
        value: "rmb",
        children: "RMB"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Option, {
        value: "dollar",
        children: "Dollar"
      })]
    })]
  });
};
var App = function App() {
  var onFinish = function onFinish(values) {
    console.log('Received values from form: ', values);
  };
  var checkPrice = function checkPrice(_, value) {
    if (value.number > 0) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Price must be greater than zero!'));
  };
  var _Form$useForm = antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.useForm(),
    _Form$useForm2 = F_react_umiMax_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1___default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
    name: "customized_form_controls",
    layout: "inline",
    onFinish: onFinish,
    form: form,
    initialValues: {
      price: {
        // number: 50,
        currency: 'rmb'
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.Item, {
      name: "price",
      label: "Price",
      rules: [{
        validator: checkPrice
      }],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(PriceInput, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z.Item, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        type: "primary",
        htmlType: "submit",
        children: "Submit"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .ZP, {
        type: "default",
        onClick: function onClick() {
          form.setFieldValue('price', {
            number: 100,
            currency: 'dollar'
          });
        },
        children: "\\u6D4B\\u8BD5"
      })]
    })]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (App);//# sourceURL=[module]
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsQ0FDRDtNQUFBVixRQUFBLGVBRUYvQixzREFBQSxDQUFDSSxVQUFVLElBQUU7SUFBQyxDQUNMLENBQUMsZUFDWkYsdURBQUEsQ0FBQ1AscURBQUksQ0FBQzRELElBQUk7TUFBQXhCLFFBQUEsZ0JBQ1IvQixzREFBQSxDQUFDTixzREFBTTtRQUFDc0MsSUFBSSxFQUFDLFNBQVM7UUFBQzJCLFFBQVEsRUFBQyxRQUFRO1FBQUE1QixRQUFBLEVBQUM7TUFFekMsQ0FBUSxDQUFDLGVBQ1QvQixzREFBQSxDQUFDTixzREFBTTtRQUNMc0MsSUFBSSxFQUFDLFNBQVM7UUFDZDRCLE9BQU8sRUFBRSxTQUFBQSxRQUFBLEVBQU07VUFDYlYsSUFBSSxDQUFDVyxhQUFhLENBQUMsT0FBTyxFQUFFO1lBQzFCaEQsTUFBTSxFQUFFLEdBQUc7WUFDWEksUUFBUSxFQUFFO1VBQ1osQ0FBQyxDQUFDO1FBQ0osQ0FBRTtRQUFBYyxRQUFBLEVBQ0g7TUFFRCxDQUFRLENBQUM7SUFBQSxDQUNBLENBQUM7RUFBQSxDQUNSLENBQUM7QUFFWCxDQUFDO0FBQ0QsK0RBQWVLLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvRm9ybS9pbmRleC5qc3g/Yjk3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZvcm0sIElucHV0LCBTZWxlY3QgfSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0XHJcbmNvbnN0IFByaWNlSW5wdXQgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlkLCB2YWx1ZSA9IHt9LCBvbkNoYW5nZSB9ID0gcHJvcHNcclxuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY3VycmVuY3ksIHNldEN1cnJlbmN5XSA9IHVzZVN0YXRlKCdybWInKVxyXG4gIGNvbnN0IHRyaWdnZXJDaGFuZ2UgPSAoY2hhbmdlZFZhbHVlKSA9PiB7XHJcbiAgICBvbkNoYW5nZT8uKHtcclxuICAgICAgbnVtYmVyLFxyXG4gICAgICBjdXJyZW5jeSxcclxuICAgICAgLi4udmFsdWUsXHJcbiAgICAgIC4uLmNoYW5nZWRWYWx1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uTnVtYmVyQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IG5ld051bWJlciA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlIHx8ICcwJywgMTApXHJcbiAgICBpZiAoTnVtYmVyLmlzTmFOKG51bWJlcikpIHtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoISgnbnVtYmVyJyBpbiB2YWx1ZSkpIHtcclxuICAgICAgc2V0TnVtYmVyKG5ld051bWJlcilcclxuICAgIH1cclxuICAgIHRyaWdnZXJDaGFuZ2Uoe1xyXG4gICAgICBudW1iZXI6IG5ld051bWJlcixcclxuICAgIH0pXHJcbiAgfVxyXG4gIGNvbnN0IG9uQ3VycmVuY3lDaGFuZ2UgPSAobmV3Q3VycmVuY3kpID0+IHtcclxuICAgIGlmICghKCdjdXJyZW5jeScgaW4gdmFsdWUpKSB7XHJcbiAgICAgIHNldEN1cnJlbmN5KG5ld0N1cnJlbmN5KVxyXG4gICAgfVxyXG4gICAgdHJpZ2dlckNoYW5nZSh7XHJcbiAgICAgIGN1cnJlbmN5OiBuZXdDdXJyZW5jeSxcclxuICAgIH0pXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBpZD17aWR9PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3ZhbHVlLm51bWJlciB8fCBudW1iZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uTnVtYmVyQ2hhbmdlfVxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogMTAwLFxyXG4gICAgICAgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTZWxlY3RcclxuICAgICAgICB2YWx1ZT17dmFsdWUuY3VycmVuY3kgfHwgY3VycmVuY3l9XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIHdpZHRoOiA4MCxcclxuICAgICAgICAgIG1hcmdpbjogJzAgOHB4JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uQ2hhbmdlPXtvbkN1cnJlbmN5Q2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInJtYlwiPlJNQjwvT3B0aW9uPlxyXG4gICAgICAgIDxPcHRpb24gdmFsdWU9XCJkb2xsYXJcIj5Eb2xsYXI8L09wdGlvbj5cclxuICAgICAgPC9TZWxlY3Q+XHJcbiAgICA8L3NwYW4+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdSZWNlaXZlZCB2YWx1ZXMgZnJvbSBmb3JtOiAnLCB2YWx1ZXMpXHJcbiAgfVxyXG4gIGNvbnN0IGNoZWNrUHJpY2UgPSAoXywgdmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS5udW1iZXIgPiAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignUHJpY2UgbXVzdCBiZSBncmVhdGVyIHRoYW4gemVybyEnKSlcclxuICB9XHJcbiAgY29uc3QgW2Zvcm1dID0gRm9ybS51c2VGb3JtKClcclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1cclxuICAgICAgbmFtZT1cImN1c3RvbWl6ZWRfZm9ybV9jb250cm9sc1wiXHJcbiAgICAgIGxheW91dD1cImlubGluZVwiXHJcbiAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgZm9ybT17Zm9ybX1cclxuICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgIHByaWNlOiB7XHJcbiAgICAgICAgICAvLyBudW1iZXI6IDUwLFxyXG4gICAgICAgICAgY3VycmVuY3k6ICdybWInLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBuYW1lPVwicHJpY2VcIlxyXG4gICAgICAgIGxhYmVsPVwiUHJpY2VcIlxyXG4gICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvcjogY2hlY2tQcmljZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgPlxyXG4gICAgICAgIDxQcmljZUlucHV0IC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICA8Rm9ybS5JdGVtPlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cImRlZmF1bHRcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBmb3JtLnNldEZpZWxkVmFsdWUoJ3ByaWNlJywge1xyXG4gICAgICAgICAgICAgIG51bWJlcjogMTAwLFxyXG4gICAgICAgICAgICAgIGN1cnJlbmN5OiAnZG9sbGFyJyxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5rWL6K+VXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkZvcm0iLCJJbnB1dCIsIlNlbGVjdCIsInVzZVN0YXRlIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIk9wdGlvbiIsIlByaWNlSW5wdXQiLCJwcm9wcyIsImlkIiwiX3Byb3BzJHZhbHVlIiwidmFsdWUiLCJvbkNoYW5nZSIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsIm51bWJlciIsInNldE51bWJlciIsIl91c2VTdGF0ZTMiLCJfdXNlU3RhdGU0IiwiY3VycmVuY3kiLCJzZXRDdXJyZW5jeSIsInRyaWdnZXJDaGFuZ2UiLCJjaGFuZ2VkVmFsdWUiLCJfb2JqZWN0U3ByZWFkIiwib25OdW1iZXJDaGFuZ2UiLCJlIiwibmV3TnVtYmVyIiwicGFyc2VJbnQiLCJ0YXJnZXQiLCJOdW1iZXIiLCJpc05hTiIsIm9uQ3VycmVuY3lDaGFuZ2UiLCJuZXdDdXJyZW5jeSIsImNoaWxkcmVuIiwidHlwZSIsInN0eWxlIiwid2lkdGgiLCJtYXJnaW4iLCJBcHAiLCJvbkZpbmlzaCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJjaGVja1ByaWNlIiwiXyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiRXJyb3IiLCJfRm9ybSR1c2VGb3JtIiwidXNlRm9ybSIsIl9Gb3JtJHVzZUZvcm0yIiwiZm9ybSIsIm5hbWUiLCJsYXlvdXQiLCJpbml0aWFsVmFsdWVzIiwicHJpY2UiLCJJdGVtIiwibGFiZWwiLCJydWxlcyIsInZhbGlkYXRvciIsImh0bWxUeXBlIiwib25DbGljayIsInNldEZpZWxkVmFsdWUiXSwic291cmNlUm9vdCI6IiJ9
//# sourceURL=webpack-internal:///2490
`)}}]);
