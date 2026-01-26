import Image from 'next/image';

export default function Games247Section() {
  return (
    <>
      <span className="articles-item-title h2-base-title">Игры 24/7</span>
      <div className="images">
        <div className="images-box">
          <Image
            alt="gol"
            src="/content/img/images/gol.webp"
            loading="lazy"
            width={384}
            height={240}
          />
          <Image
            alt="tenis"
            src="/content/img/images/tenis.webp"
            loading="lazy"
            width={384}
            height={240}
          />
          <Image
            alt="box"
            src="/content/img/images/box.webp"
            loading="lazy"
            width={384}
            height={240}
          />
        </div>
      </div>
    </>
  );
}
