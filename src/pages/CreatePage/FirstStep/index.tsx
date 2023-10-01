import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/Button";
import { TextInput } from "@/components/forms";
import s from "./FirstStep.module.scss";
import { Gender } from "@/types";

const schema = yup.object().shape({
  nickname: yup
    .string()
    .required("Введите nickname")
    .matches(/^[a-zA-Zа-яА-Я0-9]+/g, "Только буквы и цифры")
    .max(30, "Не более 30 символов"),
  name: yup
    .string()
    .required("Введите имя")
    .matches(/^[a-zA-Zа-яА-Я]+/g, "Только буквы")
    .max(50, "Не более 50 символов"),
  surname: yup
    .string()
    .required("Введите фамилию")
    .matches(/^[a-zA-Zа-яА-Я]+/g, "Только буквы")
    .max(50, "Не более 50 символов"),
  gender: yup.string().oneOf(Object.values(Gender)),
});

export function FirstStep() {
  const dispatch = useDispatch<AppDispatch>();
  const { nickname, name, surname } = useSelector(
    (state: RootState) => state.form,
  );
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit(onSubmitHandler)} className={s.form}>
        <TextInput
          label={"Nickname"}
          placeholder="Placeholder"
          defaultValue={nickname}
          id={"field-nickname"}
          {...register("nickname")}
          tip={errors.nickname?.message}
        />
        <TextInput
          label={"Name"}
          placeholder="Placeholder"
          defaultValue={name}
          id={"field-name"}
          {...register("name")}
          tip={errors.name?.message}
        />
        <TextInput
          label={"Surname"}
          placeholder="Placeholder"
          defaultValue={surname}
          id={"field-surname"}
          {...register("surname")}
          tip={errors.surname?.message}
        />
        <select {...register("gender")}>
          <option>{Gender.MAN}</option>
          <option>{Gender.WOMAN}</option>
        </select>
        <p>{errors.gender?.message}</p>
        <Button type="submit">Далее</Button>
      </form>
    </div>
  );
}
