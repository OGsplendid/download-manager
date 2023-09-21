import '../css/style.css';
import JsFileDownloader from 'js-file-downloader';

function process(e) {
  if (!e.lengthComputable) return;
  const downloadingPercentage = Math.floor((e.loaded / e.total) * 100);
  console.log(downloadingPercentage);
}

document.querySelectorAll('.download').forEach((btn) => {
  btn.addEventListener('click', async (e) => {
    e.preventDefault();

    const filePath = e.target.getAttribute('data-path');

    new JsFileDownloader({
      url: filePath,
    })
      .then((result) => {
        process(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
