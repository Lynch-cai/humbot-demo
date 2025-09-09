import { fetchBranchAutocompleteApi } from './branch-api';

export async function fetchBranchAutocomplete(signal: AbortSignal) {
  const res = await fetchBranchAutocompleteApi(signal);
  return res?.data ?? [];
}
