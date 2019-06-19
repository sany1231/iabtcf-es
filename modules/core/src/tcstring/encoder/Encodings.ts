import {IntEncoder} from './IntEncoder';
import {LangEncoder} from './LangEncoder';
import {BooleanEncoder} from './BooleanEncoder';
import {DateEncoder} from './DateEncoder';
import {VendorVectorEncoder} from './VendorVectorEncoder';
import {FixedVectorEncoder} from './FixedVectorEncoder';
// import {PublisherRestrictionsEncoder} from './PublisherRestrictionsEncoder';
import {SpecificEncoder} from './SpecificEncoder';

class Encodings {

  /**
   * The outer array describes index is encoding version - 1 (since it's
   * zero-based) and the inner array is the string representation of the BITS
   * static above ordered by "IAB Tech Lab - Consent string and vendor list
   * formats v2"
   */

  public static order: readonly (readonly string[])[] = [

    // tcf v1
    [
      'version',
      'created',
      'lastUpdated',
      'cmpId',
      'cmpVersion',
      'consentScreen',
      'consentLanguage',
      'vendorListVersion',
      'purposeConsents',
      'vendorConsents',
    ],

    // tcf v2
    [
      'version',
      'checksum',
      'created',
      'lastUpdated',
      'cmpId',
      'cmpVersion',
      'consentScreen',
      'consentLanguage',
      'vendorListVersion',
      'policyVersion',
      'isServiceSpecific',
      'useNonStandardStacks',
      'specialFeatureOptIns',
      'purposeConsents',
      'purposeLITransparency',
      'vendorConsents',
      'vendorLegitimateInterest',
      'publisherRestrictions',
    ],
  ];

  public static readonly encoders: object = {
    version: IntEncoder,
    created: DateEncoder,
    lastUpdated: DateEncoder,
    cmpId: IntEncoder,
    cmpVersion: IntEncoder,
    consentScreen: IntEncoder,
    consentLanguage: LangEncoder,
    vendorListVersion: IntEncoder,
    policyVersion: IntEncoder,
    isServiceSpecific: BooleanEncoder,
    useNonStandardStacks: BooleanEncoder,
    specialFeatureOptIns: FixedVectorEncoder,
    purposeConsents: FixedVectorEncoder,
    purposeLITransparency: FixedVectorEncoder,
    vendorConsents: VendorVectorEncoder,
    vendorLegitimateInterest: VendorVectorEncoder,
    //    publisherRestrictions: PublisherRestrictionsEncoder,

  };

}

export {Encodings, SpecificEncoder};