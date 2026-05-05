import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeCtaLinkButton'
 * @name TypeCtaLinkButtonFields
 * @type {TypeCtaLinkButtonFields}
 * @memberof TypeCtaLinkButton
 */
export interface TypeCtaLinkButtonFields {
    /**
     * Field type definition for field 'lable' (Lable)
     * @name Lable
     * @localized true
     */
    lable: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'link' (Link)
     * @name Link
     * @localized false
     */
    link?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'arrow' (Arrow)
     * @name Arrow
     * @localized false
     */
    arrow?: EntryFieldTypes.Boolean;
}

/**
 * Entry skeleton type definition for content type 'ctaLinkButton' (CTA Link Button)
 * @name TypeCtaLinkButtonSkeleton
 * @type {TypeCtaLinkButtonSkeleton}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-23T21:35:48.909Z
 * @version 1
 */
export type TypeCtaLinkButtonSkeleton = EntrySkeletonType<TypeCtaLinkButtonFields, "ctaLinkButton">;
/**
 * Entry type definition for content type 'ctaLinkButton' (CTA Link Button)
 * @name TypeCtaLinkButton
 * @type {TypeCtaLinkButton}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-23T21:35:48.909Z
 * @version 1
 */
export type TypeCtaLinkButton<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCtaLinkButtonSkeleton, Modifiers, Locales>;

export function isTypeCtaLinkButton<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeCtaLinkButton<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'ctaLinkButton'
}

export type TypeCtaLinkButtonWithoutLinkResolutionResponse = TypeCtaLinkButton<"WITHOUT_LINK_RESOLUTION">;
export type TypeCtaLinkButtonWithoutUnresolvableLinksResponse = TypeCtaLinkButton<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeCtaLinkButtonWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeCtaLinkButton<"WITH_ALL_LOCALES", Locales>;
export type TypeCtaLinkButtonWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeCtaLinkButton<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeCtaLinkButtonWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeCtaLinkButton<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
