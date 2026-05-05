import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCtaLinkButtonSkeleton } from "./TypeCtaLinkButton";

/**
 * Fields type definition for content type 'TypeHeroSection'
 * @name TypeHeroSectionFields
 * @type {TypeHeroSectionFields}
 * @memberof TypeHeroSection
 */
export interface TypeHeroSectionFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'bodyText' (Body text)
     * @name Body text
     * @localized false
     */
    bodyText: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     * @summary Hero image. Add one to conditionally render it.
     */
    image?: EntryFieldTypes.AssetLink;
    /**
     * Field type definition for field 'ctAs' (CTAs)
     * @name CTAs
     * @localized false
     */
    ctAs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCtaLinkButtonSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'heroSection' (Hero Section)
 * @name TypeHeroSectionSkeleton
 * @type {TypeHeroSectionSkeleton}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-22T01:18:17.672Z
 * @version 11
 */
export type TypeHeroSectionSkeleton = EntrySkeletonType<TypeHeroSectionFields, "heroSection">;
/**
 * Entry type definition for content type 'heroSection' (Hero Section)
 * @name TypeHeroSection
 * @type {TypeHeroSection}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-22T01:18:17.672Z
 * @version 11
 */
export type TypeHeroSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroSectionSkeleton, Modifiers, Locales>;

export function isTypeHeroSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeHeroSection<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'heroSection'
}

export type TypeHeroSectionWithoutLinkResolutionResponse = TypeHeroSection<"WITHOUT_LINK_RESOLUTION">;
export type TypeHeroSectionWithoutUnresolvableLinksResponse = TypeHeroSection<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeHeroSectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeHeroSection<"WITH_ALL_LOCALES", Locales>;
export type TypeHeroSectionWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeHeroSection<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeHeroSectionWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeHeroSection<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
