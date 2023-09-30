import Divider from "@mui/material/Divider";
import { Avatar } from "@/components/Avatar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import isEmail from "validator/lib/isEmail";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/forms";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@store";
import { incrementStep, setEmail, setPhone } from "@/store/form.slice";
import { useNavigate } from "react-router-dom";
import s from "./MainPage.module.scss";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Введите email")
    .email("Введите корректный email")
    .test({
      name: "is email",
      test: (value) => isEmail(value),
      message: "Введите корректный email",
    }),
  phone: yup
    .string()
    .min(11, "Введите номер телефона")
    .matches(/\d/g)
    .required("Введите номер телефона"),
});

export function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { email, phone } = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phone));
    dispatch(incrementStep());
    navigate("/create");
  };
  return (
    <div className={s.wrapper}>
      <Avatar />
      <Divider classes={s.divider} />
      <form onSubmit={handleSubmit(onSubmitHandler)} className={s.form}>
        <TextInput
          label={"Номер телефона"}
          defaultValue={phone}
          {...register("phone")}
          tip={errors.phone?.message}
        />
        <TextInput
          label={"Email"}
          defaultValue={email}
          {...register("email")}
          tip={errors.email?.message}
        />
        <Button type="submit">Начать</Button>
      </form>
    </div>
  );
}
