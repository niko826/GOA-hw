export function heavy() { return 'done'; }


async function run() {
  const mod = await import('./lazyLoad.js'); 
  console.log(mod.heavy());
}
run();
