import { useEffect } from "react";
import { Button, Row, Input, Form } from "antd";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { selectAuth, loginAsync } from "../../store/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { EyeTwoTone, EyeInvisibleOutlined } from "@ant-design/icons";
import type { CheckboxChangeEvent } from "antd/lib/checkbox";

interface Values {
  username: string;
  password: string;
  isSale: boolean;
}

const initialVal: Values = {
  username: "",
  password: "",
  isSale: localStorage.getItem("isSale") === "true",
};

export default function Login() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  const handleLogin = (dataLogin: Values) => {
    dispatch(loginAsync(dataLogin));
  };

  useEffect(() => {
    setFieldValue("isSale", localStorage.getItem("isSale") === "true");
  }, []);

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: Yup.object({
      username: Yup.string().required(`Username is required`),
      password: Yup.string().required(`Password is required`),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit(values: Values) {
      handleLogin(values);
    },
  });

  const changeIsSale = (e: CheckboxChangeEvent) => {
    localStorage.setItem("isSale", e.target.checked ? "true" : "false");
    setFieldValue("isSale", e.target.checked);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    validateField,
    setFieldValue,
  } = formik;

  return (
    <div className="login flex">
      <div className="block-left h-full w-5/12 hidden md:block bg-center"></div>
      <div className="block-right h-full relative w-full md:w-7/12">
        <div className="form ">
          <div className="logo">
            <img alt="logo" src={"/images/liberty-logo.png"} />
          </div>
          <Form onFinish={handleSubmit}>
            <div className="mb-3 md:mb-5">
              <Input
                name="username"
                placeholder={`Username`}
                value={values.username}
                onChange={handleChange}
                className="md:h-11"
                onBlur={() => validateField("username")}
              />
              <span className="text-red-500">{errors.username}</span>
            </div>
            <div className="mb-3 md:mb-5">
              <Input.Password
                name="password"
                placeholder={`Password`}
                iconRender={(visible) =>
                  visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                }
                className="md:h-11"
                value={values.password}
                onChange={handleChange}
                onBlur={() => validateField("password")}
              />
              <span className="text-red-500">{errors.password}</span>
            </div>
            <Row>
              <Button
                type="primary"
                htmlType="submit"
                className="bg-[#1890ff] md:h-11"
              >
                {`Login`}
              </Button>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}
