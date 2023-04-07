import React, { useState } from "react";
import * as yup from "yup";
import { Formik, formik } from "formik";
import { useSelector } from "react-redux";
import { Box, Step, Stepper } from "@mui/material";
const initialValues = {
  billingAddress: {
    firstName: "",
    lastName: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  shippingAddress: {
    isSameAdress: true,
    firstName: "",
    lastName: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zipCode: "",
  },
  email: "",
  phoneNumber: "",
};

const checkoutSchema = [
  yup.object().shape({
    billingAddress: yup.object().shape({
      firstName: yup.string().required("required"),
      lastName: yup.string().required("required"),
      street1: yup.string().required("required"),
      street2: yup.string(),
      city: yup.string().required("required"),
      state: yup.string().required("required"),
      zipCode: yup.string().required("required"),
    }),
    shippingAddress: yup.object().shape({
      isSameAdress: yup.boolean(),
      firstName: yup.string().when("isSameAdress", {
        is: false,
        then: yup.string().required("required"),
      }),
      lastName: yup.string().when("isSameAdress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street1: yup.string().when("isSameAdress", {
        is: false,
        then: yup.string().required("required"),
      }),
      street2: yup.string(),
      city: yup.string().when("isSameAdress", {
        is: false,
        then: yup.string().required("required"),
      }),
      state: yup.string().when("isSameAdress", {
        is: false,
        then: yup.string().required("required"),
      }),
      zipCode: yup.string().when("isSameAdress", {
        is: false,
        then: yup.string().required("required"),
      }),
    }),
  }),
  yup.object().shape({
    email: yup.string().required("required").email(" invalid email "),
    phoneNumber: yup.string().required("required"),
  }),
];
function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const cart = useSelector((state) => state.cart.cart);
  const isFirst = activeStep === 0;
  const isSecond = activeStep === 1;
  const handleFormSubmit = async (value, action) => {
    setActiveStep(activeStep + 1);
  };
  const makePayement = async (values) => {};
  return (
    <Box width={"80%"} m="100px auto">
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>Billing</Step>
        <Step>Payement</Step>
      </Stepper>
      <Box>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirst && (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              )}
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Checkout;
