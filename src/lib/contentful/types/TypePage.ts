import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeHeroSectionSkeleton } from "./TypeHeroSection";
import type { TypeSeoMetaSkeleton } from "./TypeSeoMeta";

/**
 * Fields type definition for content type 'TypePage'
 * @name TypePageFields
 * @type {TypePageFields}
 * @memberof TypePage
 */
export interface TypePageFields {
    /**
     * Field type definition for field 'pageName' (Page name)
     * @name Page name
     * @localized false
     */
    pageName: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'seoMetadata' (SEO metadata)
     * @name SEO metadata
     * @localized true
     */
    seoMetadata: EntryFieldTypes.EntryLink<TypeSeoMetaSkeleton>;
    /**
     * Field type definition for field 'blocks' (Blocks)
     * @name Blocks
     * @localized false
     */
    blocks?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHeroSectionSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'page' (Page)
 * @name TypePageSkeleton
 * @type {TypePageSkeleton}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-22T14:26:00.129Z
 * @version 9
 */
export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
/**
 * Entry type definition for content type 'page' (Page)
 * @name TypePage
 * @type {TypePage}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-22T14:26:00.129Z
 * @version 9
 */
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export function isTypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypePage<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'page'
}

export type TypePageWithoutLinkResolutionResponse = TypePage<"WITHOUT_LINK_RESOLUTION">;
export type TypePageWithoutUnresolvableLinksResponse = TypePage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypePageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypePageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypePage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
