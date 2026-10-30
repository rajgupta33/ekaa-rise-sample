import http from "http";

const routes = [
  "/",
  "/psychometric-test-dubai",
  "/psychometric-test-dubai/sample-report",
  "/career-counselling-dubai",
  "/subject-selection-counselling-dubai",
  "/study-abroad-consultants-dubai",
  "/study-abroad/undergraduate-admissions",
  "/study-abroad/masters-admissions",
  "/study-abroad/uk",
  "/study-abroad/usa",
  "/study-abroad/canada",
  "/study-abroad/australia",
  "/study-abroad/germany",
  "/study-abroad/ireland",
  "/our-process",
  "/for-parents",
  "/about",
  "/book-psychometric-test",
  "/checkout-demo",
  "/book-consultation",
  "/contact",
  "/pathway-explorer",
  "/faq",
  "/resources",
  "/resources/psychometric-tests-for-students-explained",
  "/resources/choosing-subjects-after-grade-10-dubai",
  "/resources/ib-vs-a-levels-university-admissions",
  "/resources/study-abroad-application-timeline-dubai",
  "/privacy-policy",
  "/terms-and-conditions",
  "/refund-and-cancellation-policy",
  "/assessment-disclaimer",
  "/thank-you",
  "/sitemap.xml",
  "/robots.txt",
];

async function checkRoute(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        const hasAed100 = data.includes("100") || data.includes("AED");
        resolve({
          path,
          status: res.statusCode,
          size: data.length,
          hasAed100,
        });
      });
    }).on("error", (err) => {
      resolve({ path, status: "ERROR", error: err.message });
    });
  });
}

async function run() {
  console.log("Starting Route Smoke Tests on http://localhost:3000...\n");
  let passed = 0;
  let failed = 0;

  for (const r of routes) {
    const res = await checkRoute(r);
    if (res.status === 200) {
      console.log(`✅ [200 OK] ${r.padEnd(52)} (${res.size} bytes)`);
      passed++;
    } else {
      console.error(`❌ [FAILED: ${res.status}] ${r}`);
      failed++;
    }
  }

  console.log(`\nResults: ${passed} passed, ${failed} failed out of ${routes.length} total routes.`);
  if (failed > 0) process.exit(1);
}

run();
