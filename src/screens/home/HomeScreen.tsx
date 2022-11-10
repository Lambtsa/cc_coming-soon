import { FormEvent, useCallback, useEffect, useMemo } from "react";
import {
  BrandLink,
  SectionWrapper,
} from "@components/SplitSection/SplitSection.styles";
import { SplitSection } from "@components/SplitSection";
import { routes } from "@helpers/routes";
import * as z from "zod";
import { Image } from "@components/Image";
import { SocialIcons } from "@components/SocialIcons";
import { Container } from "@components/Container";
import { Form } from "@components/Form";
import { Title } from "./HomeScreen.styles";
import { Button } from "@components/Button";
import { useTranslation } from "@hooks/useTranslation";
import { InputText } from "@components/Inputs/InputText";
import { InputRadio } from "@components/Inputs/InputRadio";
import { TypeOf } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextSeparator } from "@components/TextSeparator";

export const HomeScreen = (): JSX.Element | null => {
  const { t } = useTranslation();

  /* ################################################## */
  /* Forms */
  /* ################################################## */
  const validationSchema = z.object({
    email: z.string().email(),
    name: z.string().min(1),
    hasAcceptedConditions: z.boolean().refine((val) => val === true, {
      message: t({ id: "error.signUp.acceptConditions" }),
    }),
  });

  type FormFields = TypeOf<typeof validationSchema>;

  const defaultValues: FormFields = useMemo(
    () => ({
      email: "",
      name: "",
      hasAcceptedConditions: false
    }),
    []
  );

  /**
   * Options chosen
   * https://react-hook-form.com/api/useform/
   */
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
    setValue,
  } = useForm({
    defaultValues,
    mode: "onChange",
    /* All errors from each field will be gathered */
    criteriaMode: "all",
    resolver: zodResolver(validationSchema),
  });

  useEffect(() => {
    reset(defaultValues, { keepDefaultValues: true });
  }, [reset, defaultValues]);

  /* ################################################## */
  /* Actions */
  /* ################################################## */
  const onSubmit = useCallback(
    (e?: FormEvent<HTMLButtonElement>) => {
      e?.preventDefault();

      handleSubmit(
        async (formFields) => {
          await fetch('/api/subscribeUser', {
            body: JSON.stringify({
              email: formFields.email,
              name: formFields.name
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });
      
        },
        (error) => {
          console.log("error", error);
        }
      )();
    },
    [handleSubmit]
  );

  return (
    <SectionWrapper>
      <SplitSection color="Beige">
        <BrandLink variant="Link" href={routes.index()}>
          {t({ id: "commons.brandName" })}
        </BrandLink>
        <Image src="/images/charlie-1.webp" alt="Thank you" />
        <SocialIcons position="Right" orientation="Vertical" />
      </SplitSection>
      <SplitSection innerBorder color="Green">
        <Container size="mobile">
          <Form
            columns={1}
            title={<Title>{t({ id: "screen.comingSoon.title" })}</Title>}
          >
            <TextSeparator text="Soyez au courant dès notre sortie" />
            <InputText
              type="text"
              control={control}
              name="name"
              placeholder={t({ id: "commons.firstName" })}
              error={errors.name}
            />
            <InputText
              control={control}
              name="email"
              placeholder={t({ id: "commons.email" })}
              error={errors.email}
            />
            <InputRadio
              setValue={setValue}
              control={control}
              name="hasAcceptedConditions"
              label="screen.signUp.hasAccepted"
              error={errors.hasAcceptedConditions}
            />
            <Button
              themeColor="Beige/Red"
              variant="Primary"
              type="submit"
              fullwidth
              onClick={onSubmit}
            >
              {t({ id: "screen.subscribe.btn" })}
            </Button>
          </Form>
        </Container>
      </SplitSection>
    </SectionWrapper>
  );
};
