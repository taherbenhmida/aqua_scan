import { UrlSegment, UrlSegmentGroup, Route, UrlMatchResult } from '@angular/router';

export function blobUrlMatcher(segments: UrlSegment[], group: UrlSegmentGroup, route: Route): UrlMatchResult | null {
  const url = segments.map(segment => segment.path).join('/');
  if (url.startsWith('blob:')) {
    return {
      consumed: segments,
      posParams: {}
    };
  }
  return null;
}
