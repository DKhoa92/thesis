import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Modal, Input, Button } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const initialVal = {
  currentPassword: "",
  newPassword: "",
  passwordConfirmation: "",
};

export default function ModalChangePass(props: {
  setIsShowModalChangePass: Function;
}) {
  const { setIsShowModalChangePass } = props;

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: Yup.object({
      currentPassword: Yup.string().required("Current password is required"),
      newPassword: Yup.string()
        .required("New password is required")
        .min(6, "This value must be minimum of 6 characters"),
      passwordConfirmation: Yup.string()
        .required("New password confirmation is required")
        .min(6, "This value must be minimum of 6 characters")
        .test({
          message: "Password confirmation is not the same as the new password",
          test: function (value, ctx) {
            return value === ctx.parent.newPassword;
          },
        }),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit(values) {
      setIsShowModalChangePass(false);
    },
  });

  const { values, errors, handleSubmit, handleChange, validateField } = formik;

  const handleOk = () => {
    setIsShowModalChangePass(false);
  };

  const handleCancel = () => {
    setIsShowModalChangePass(false);
  };

  return (
    <Modal
      title={"Change password"}
      visible={true}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
    >
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="currentPassword">{"Current password"}</label>
          <Input.Password
            placeholder={"Current password"}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            id="currentPassword"
            name="currentPassword"
            value={values.currentPassword}
            onChange={handleChange}
            onBlur={() => validateField("currentPassword")}
          />
          <p className="text-red-500">{errors.currentPassword}</p>
        </div>
        <div className="mt-3">
          <label htmlFor="newPassword">{"New password"}</label>
          <Input.Password
            placeholder={"New password"}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            id="newPassword"
            name="newPassword"
            value={values.newPassword}
            onChange={handleChange}
            onBlur={() => validateField("newPassword")}
          />
          <p className="text-red-500">{errors.newPassword}</p>
        </div>
        <div className="mt-3">
          <label htmlFor="passwordConfirmation">
            {"New password confirmation"}
          </label>
          <Input.Password
            placeholder={"New password confirmation"}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            id="passwordConfirmation"
            name="passwordConfirmation"
            value={values.passwordConfirmation}
            onChange={handleChange}
            onBlur={() => validateField("passwordConfirmation")}
          />
          <p className="text-red-500">{errors.passwordConfirmation}</p>
        </div>
        <Button
          htmlType="submit"
          type="primary"
          className="flex items-center bg-[#1890ff] mt-4 mx-auto"
        >
          {"Change password"}
        </Button>
      </form>
    </Modal>
  );
}
