import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSeoMeta'
 * @name TypeSeoMetaFields
 * @type {TypeSeoMetaFields}
 * @memberof TypeSeoMeta
 */
export interface TypeSeoMetaFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized false
     */
    description?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'ogImage' (OG image)
     * @name OG image
     * @localized false
     */
    ogImage?: EntryFieldTypes.AssetLink;
}

/**
 * Entry skeleton type definition for content type 'seoMeta' (SEO meta)
 * @name TypeSeoMetaSkeleton
 * @type {TypeSeoMetaSkeleton}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-22T14:33:08.942Z
 * @version 3
 */
export type TypeSeoMetaSkeleton = EntrySkeletonType<TypeSeoMetaFields, "seoMeta">;
/**
 * Entry type definition for content type 'seoMeta' (SEO meta)
 * @name TypeSeoMeta
 * @type {TypeSeoMeta}
 * @author 0332BmLPoPiPSpIrDm3TIB
 * @since 2026-04-22T14:33:08.942Z
 * @version 3
 */
export type TypeSeoMeta<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSeoMetaSkeleton, Modifiers, Locales>;

export function isTypeSeoMeta<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: unknown): entry is TypeSeoMeta<Modifiers, Locales> {
    const candidate = entry as { sys?: { contentType?: { sys?: { id?: string } } } };
    return candidate.sys?.contentType?.sys?.id === 'seoMeta'
}

export type TypeSeoMetaWithoutLinkResolutionResponse = TypeSeoMeta<"WITHOUT_LINK_RESOLUTION">;
export type TypeSeoMetaWithoutUnresolvableLinksResponse = TypeSeoMeta<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSeoMetaWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMeta<"WITH_ALL_LOCALES", Locales>;
export type TypeSeoMetaWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMeta<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSeoMetaWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMeta<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
