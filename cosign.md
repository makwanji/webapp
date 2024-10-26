# cosign


```bash
# Sign image
echo -n "$COSIGN_KEY_PASSPHRASE" | cosign sign --yes --key ~/.ssh/cosign.key makwanji/productservice-web:v1.0.0                                                                                           base
WARNING: Image reference makwanji/productservice-web:v1.0.0 uses a tag, not a digest, to identify the image to sign.
    This can lead you to sign a different image than the intended one. Please use a
    digest (example.com/ubuntu@sha256:abc123...) rather than tag
    (example.com/ubuntu:latest) for the input to cosign. The ability to refer to
    images by tag will be removed in a future release.


	The sigstore service, hosted by sigstore a Series of LF Projects, LLC, is provided pursuant to the Hosted Project Tools Terms of Use, available at https://lfprojects.org/policies/hosted-project-tools-terms-of-use/.
	Note that if your submission includes personal data associated with this signed artifact, it will be part of an immutable record.
	This may include the email address associated with the account with which you authenticate your contractual Agreement.
	This information will be used for signing this artifact and will be stored in public transparency logs and cannot be removed later, and is subject to the Immutable Record notice at https://lfprojects.org/policies/hosted-project-tools-immutable-records/.

By typing 'y', you attest that (1) you are not submitting the personal data of any other person; and (2) you understand and agree to the statement and the Agreement terms at the URLs listed above.
tlog entry created with index: 143097010
Pushing signature to: index.docker.io/makwanji/productservice-web



# verify image
cosign verify --key ~/.ssh/cosign.pub makwanji/productservice-web:v1.0.0                                                                                                                             8s  base

Verification for index.docker.io/makwanji/productservice-web:v1.0.0 --
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - Existence of the claims in the transparency log was verified offline
  - The signatures were verified against the specified public key

[{"critical":{"identity":{"docker-reference":"index.docker.io/makwanji/productservice-web"},"image":{"docker-manifest-digest":"sha256:63a810addb2a51d281ab3066ec4b4f69f709c5420a6262da093b6cc190e005a4"},"type":"cosign container image signature"},"optional":{"Bundle":{"SignedEntryTimestamp":"MEUCIEv0ssa3/iqdxEtqoICCfeZjyLVTc2PRGN6s7tkbWpWVAiEA6YHESvKdZjDccIdt5PrJ6R4m74TV0KYnC4t8ibuqr10=","Payload":{"body":"eyJhcGlWZXJzaW9uIjoiMC4wLjEiLCJraW5kIjoiaGFzaGVkcmVrb3JkIiwic3BlYyI6eyJkYXRhIjp7Imhhc2giOnsiYWxnb3JpdGhtIjoic2hhMjU2IiwidmFsdWUiOiJjNTFhMTMzNWVmYjhkMWE2ZjA3ZWY1MGY5OTcyZmNmODk2OTJjYjdlMDg1ZjFiMzA3YWZlNmY5MjUwNTJkOGM2In19LCJzaWduYXR1cmUiOnsiY29udGVudCI6Ik1FVUNJUUMzY2xzbTBXWTU3d2hNUCtzalhYT25VU0gwMlRseVIzN1RRSisxazlMeTlnSWdLSDVHSDFKbFVLNEswNFlGTVN1TjVZVG5RTFhBU2R6cC9KZTdHSlVlK0tJPSIsInB1YmxpY0tleSI6eyJjb250ZW50IjoiTFMwdExTMUNSVWRKVGlCUVZVSk1TVU1nUzBWWkxTMHRMUzBLVFVacmQwVjNXVWhMYjFwSmVtb3dRMEZSV1VsTGIxcEplbW93UkVGUlkwUlJaMEZGVEc1M1QwUnNWRkZhUW1odVNYSkROa2Q0TWs5WFFYWnVlSGxqZGdwU1dqVkhPR1ZPYVVoT1lrdDRRMWhHVVZvMll6Qm5Na0V3U2s1Q1ZHbHFlRnBQWTBkc1dubG9kakZQTUVaVU5tcGtiQ3RJTVRsVFYzWjNQVDBLTFMwdExTMUZUa1FnVUZWQ1RFbERJRXRGV1MwdExTMHRDZz09In19fX0=","integratedTime":1729736198,"logIndex":143097010,"logID":"c0d23d6ad406973f9559f3ba2d1ca01f84147d8ffc5b8445c224f98b9591801d"}}}}]

```

