import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@components/Button";
import { Form } from "@components/Form";
import { InputText } from "@components/Inputs/InputText";
import { SocialIcons } from "@components/SocialIcons";
import { useTranslation } from "@hooks/useTranslation";
import {
  FooterSection,
  FooterTitle,
  FooterWrapper,
  FooterSubtitle,
  FooterContent,
} from "./Footer.styles";
import * as z from "zod";
import { TypeOf } from "zod";
import { FormEvent, useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Container } from "@components/Container";
import { Link } from "@components/Link";
import { routes } from "@helpers/routes";

export const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  const validationSchema = z.object({
    email: z.string().email(),
  });

  type FormFields = TypeOf<typeof validationSchema>;

  const defaultValues: FormFields = useMemo(
    () => ({
      email: "",
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

  const onSubmit = useCallback(
    (e?: FormEvent<HTMLFormElement>) => {
      e?.preventDefault();

      handleSubmit(
        async (formFields) => {
          console.log(formFields);
        },
        (error) => {
          console.log("error", error);
        }
      )();
    },
    [handleSubmit]
  );

  return (
    <FooterWrapper color="Red">
      <Container size="pc">
        <FooterContent>
          <FooterSection>
            <FooterTitle>
              {t({ id: "footer.section.title.brandName" })}
            </FooterTitle>
            <Link variant="TextLink" href={routes.formules()}>
              {t({ id: "footer.section.link.box" })}
            </Link>
            <Link variant="TextLink" href={routes.signUp()}>
              {t({ id: "footer.section.link.signUp" })}
            </Link>
            <Link variant="TextLink" href={routes.login()}>
              {t({ id: "footer.section.link.login" })}
            </Link>
            <Link variant="TextLink" href={routes.aboutUs()}>
              {t({ id: "footer.section.link.whoAreWe" })}
            </Link>
          </FooterSection>
          <FooterSection>
            <FooterTitle>{t({ id: "footer.section.title.info" })}</FooterTitle>
            <Link variant="TextLink" href={routes.faq()}>
              {t({ id: "footer.section.link.faq" })}
            </Link>
            <Link variant="TextLink" href={routes.conditions()}>
              {t({ id: "footer.section.link.conditions" })}
            </Link>
            <Link variant="TextLink" href="/">
              {t({ id: "footer.section.link.terms" })}
            </Link>
            <Link variant="TextLink" href={routes.contact()}>
              {t({ id: "footer.section.link.contact" })}
            </Link>
          </FooterSection>
          <FooterSection>
            <FooterTitle>
              {t({ id: "footer.section.title.social" })}
            </FooterTitle>
            <FooterSubtitle>
              {t({ id: "footer.section.subtitle.social" })}
            </FooterSubtitle>
            <SocialIcons orientation="Horizontal" />
          </FooterSection>
          <FooterSection>
            <FooterTitle>
              {t({ id: "footer.section.title.newsletter" })}
            </FooterTitle>
            <FooterSubtitle>
              {t({ id: "footer.section.subtitle.social" })}
            </FooterSubtitle>
            <Form columns={1} onSubmit={onSubmit}>
              <InputText
                control={control}
                name="email"
                placeholder={t({ id: "footer.section.email.placeholder" })}
                error={errors.email}
              />
              <Button
                themeColor="Beige/Red"
                variant="Secondary"
                type="submit"
                fullwidth
              >
                {t({ id: "footer.section.email.signUp" })}
              </Button>
            </Form>
          </FooterSection>
        </FooterContent>
      </Container>
    </FooterWrapper>
  );
};
