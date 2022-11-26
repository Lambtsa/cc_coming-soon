import { NextWebVitalsMetric } from "next/app";

const isProduction = process.env.NODE_ENV === "production";

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
  if (isProduction) {
    return;
  }
  switch (metric.name) {
    case "CLS": {
      console.log({ cumulativeLayoutShift: metric.value });
      break;
    }
    case "FCP": {
      // handle
      console.log({ firstContentfulPaint: metric.value });
      break;
    }
    case "FID": {
      // handle
      console.log({ firstInputDelay: metric.value });
      break;
    }
    case "LCP": {
      // handle
      console.log({ largestContentfulPaint: metric.value });
      break;
    }
    case "Next.js-hydration": {
      // handle
      // console.log({ timeToFirstByte: metric.value})
      break;
    }
    case "Next.js-render": {
      // handle
      // console.log({ timeToFirstByte: metric.value})
      break;
    }
    case "Next.js-route-change-to-render": {
      // handle
      // console.log({ timeToFirstByte: metric.value})
      break;
    }
    case "TTFB": {
      // handle
      console.log({ timeToFirstByte: metric.value });
      break;
    }
    default:
      break;
  }
};
