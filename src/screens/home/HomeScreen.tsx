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
import { Title, ToastLink } from "./HomeScreen.styles";
import { Button } from "@components/Button";
import { useTranslation } from "@hooks/useTranslation";
import { InputText } from "@components/Inputs/InputText";
import { InputRadio } from "@components/Inputs/InputRadio";
import { TypeOf } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextSeparator } from "@components/TextSeparator";
import { useMedia } from "react-use";
import { useToast } from "@context/ToastContext";
import { MailchimpErrors } from "types/errors";

export const HomeScreen = (): JSX.Element | null => {
  const { t } = useTranslation();
  const { addToast } = useToast();
  const isMobile = useMedia('(max-width: 768px)', false);

  /* ################################################## */
  /* Forms */
  /* ################################################## */
  /* TODO: add the email error message in french @see https://github.com/colinhacks/zod/blob/master/ERROR_HANDLING.md */
  const validationSchema = z.object({
    email: z.string().email({ message: t({ id: "commons.invalidEmail"})}),
    name: z.string({
      required_error: t({ id: "commons.invalidName"}),
    }).min(1),
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
    formState,
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

  const formErrors = useMemo(() => {
    return formState.errors
  }, [formState.errors])

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
          const response = await fetch('/api/subscribeUser', {
            body: JSON.stringify({
              email: formFields.email,
              name: formFields.name
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          });

          if (!response.ok) {
            const { message } = await response.json()

            switch (message.title) {
              /* If a member already exists we don't want a random bot to know that so we return a valid message. */
              case MailchimpErrors.MemberExists: {
                addToast({
                  type: "Active",
                  toastMessage: {
                    id: "commons.congratulations"
                  },
                });
                reset({})
                break;
              };
              default: {
                addToast({
                  type: "Error",
                  /* TODO: make the generic error email a link */
                  toastMessage: {
                    id: "commons.genericError",
                    variables: {
                      email: (
                        <ToastLink
                          variant="Link"
                          newTab
                          href="mailto:hello@charlies-closet.com"
                        >
                          hello@charlies-closet.com
                        </ToastLink>
                      )
                    }
                  },
                });
                break;
              }
            }
          } else {
            addToast({
              type: "Active",
              toastMessage: {
                id: "commons.congratulations"
              },
            });
          }
        },
        (error) => {
          /* Note: The error is triggered here by missing/bad input */ 
          addToast({
            type: "Error",
            toastMessage: {
              id: "commons.missingInfoError"
            },
          });
          console.log({ error })
        }
      )();
    },
    [addToast, handleSubmit, reset]
  );

  if (isMobile) {
    return (
      <SectionWrapper>
        <SplitSection innerBorder color="Green">
          <BrandLink customColor="#ffffff" variant="Link" href={routes.index()}>
            {t({ id: "commons.brandName" })}
          </BrandLink>
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
                error={formErrors.name}
              />
              <InputText
                control={control}
                name="email"
                placeholder={t({ id: "commons.email" })}
                error={formErrors.email}
              />
              <InputRadio
                setValue={setValue}
                control={control}
                name="hasAcceptedConditions"
                label="screen.signUp.hasAccepted"
                error={formErrors.hasAcceptedConditions}
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
            <SocialIcons position="center" orientation="horizontal" alignment="bottom" />
          </Container>
        </SplitSection>
      </SectionWrapper>
    )
  }

  return (
    <SectionWrapper>
      <SplitSection color="Beige">
        <BrandLink variant="Link" href={routes.index()}>
          {t({ id: "commons.brandName" })}
        </BrandLink>
        <Image src="/images/charlie-1.webp" alt="Thank you" />
        <SocialIcons position="right" orientation="vertical" />
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
              error={formErrors.name}
            />
            <InputText
              control={control}
              name="email"
              placeholder={t({ id: "commons.email" })}
              error={formErrors.email}
            />
            <InputRadio
              setValue={setValue}
              control={control}
              name="hasAcceptedConditions"
              label="screen.signUp.hasAccepted"
              error={formErrors.hasAcceptedConditions}
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
