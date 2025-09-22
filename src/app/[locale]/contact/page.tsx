import { useTranslations } from "next-intl";

export default function Page() {
const t = useTranslations();

    return (
        <div>{t('contacts')} Page</div>
    )
}