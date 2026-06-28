# DX Phase 2 Spike — Tour Packages Direct JSON Loader

## Prototype

Prototype file:

- `scripts/spikes/tour-packages-direct-json-loader.mjs`

This script reads `scripts/data/packages/*/{main.json,locales.json}` directly and normalizes package entries without using generated runtime modules.

## Finding

A direct JSON loader is technically feasible, but it still depends on nearly the same normalization rules already required by generation:

- locale-specific collection-title mapping
- itinerary flattening
- boat-spec localization
- cabin localization and price-unit normalization
- price-list normalization

## Decision

For now, **keep generated normalized modules**.

## Why

- The normalization complexity does not disappear with direct JSON.
- Direct JSON would move more transformation work into runtime loaders.
- The current generated-module approach remains simpler operationally after Phase 1, especially now that:
  - route duplication is removed
  - generators are thinner
  - validation is stronger
  - localization helpers are extracted

## Revisit trigger

Revisit direct JSON only if one of these becomes true:

- generated artifacts become a major source of merge churn
- editors/contributors frequently modify package sources and struggle to trace outputs
- runtime loaders can reuse shared normalization with less complexity than the current generation flow
