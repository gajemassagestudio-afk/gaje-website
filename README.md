# Gaje Masaj Stüdyosu — Web sitesi v2 · Cal.com rezervasyon

Tek sayfalık, duyarlı (mobil/tablet/masaüstü) Gaje web sitesi taslağı.

## Açmak için

`index.html` dosyasını tarayıcıda açın. İnternet erişimi varsa Pexels fotoğrafları ve Google Fonts yüklenir. İnternet olmasa da sayfa ve temel işlevler çalışır (logo ve fiyat menüsü yereldir). Hosting için bu klasördeki dosyaların tamamını sunucuya yükleyebilirsiniz.

## Fiyatlar ve iletişim

* Hizmet/fiyat ve paket verileri `script.js` içindeki `services` ve `packages` listelerindedir.
* Fiyatlar **yalnızca kullanıcının gönderdiği Gaje afişinden** alınmıştır; referans sitelerden fiyat alınmamıştır.
* İletişim: Cansu Çakır, +90 507 488 64 32.
* Dokuz masaj hizmetinin **Randevu Al** butonları işletme onaylı Cal.com rezervasyon sayfalarını açar; Cal.com popup'ın yüklenmediği durumlarda doğrudan bağlantı yedek olarak çalışır.
* İşletme onayı, boş saatler, çakışmalar ve ödeme koşulları Cal.com hesabından yönetilir.
* Paketler WhatsApp ile bilgi/talep olarak kalmıştır: Cal.com üzerinde paket kredisi tanımlanmadı.
* Adres, işletme saatleri, sosyal medya, ekip bilgileri paylaşılmadığı için siteye eklenmedi.
* Afişten çıkan teklif: 5 seans paketleri 45 gün, 10 seans paketleri 90 gün içinde kullanılmalıdır; VIP 10'lu pakete 1 yüz masajı hediye.

## Yayın öncesi öneriler

1. İşletmenin kesin adresi/konumu, çalışma saatleri ve sosyal medya hesabı eklenmeli.
2. Stüdyoya ait profesyonel fotoğraflar mevcut Pexels fotoğraflarının yerine konmalı.
3. Afişteki "Yeni yıla kadar özel fiyatlar" kampanyasının geçerlilik tarihi netleştirilmeli.
4. Marka yazı tipleri ve kullanılması istenen resmi logo varyantı teyit edilmeli. Logo sembolü kullanıcı görselinden arka plan çıkarılarak elde edildi.
5. Canlı ortama alınmadan önce gizlilik metni / çerez uygulaması / işletme bilgileri kontrol edilmeli.

## Referanslar

Sayfa düzeni ve rezervasyon mantığı konusunda ilham alınan siteler: Peace Touch, Donelson Massage Center, River North Massage ve Bodywork Unbound. Bu sitelerin içerikleri ve fiyatları kopyalanmamıştır.

Fotoğraf kaynakları: Pexels, spa masaj fotoğrafları. Kullanılan fotoğraflar internete bağlı görüntülenir; ticari yayına geçmeden önce stüdyo fotoğraflarıyla değiştirilmesi tavsiye edilir.

## Yayından önce rezervasyon kontrolü

1. 9 masaj kartına basarak doğru hizmetin Cal.com ekranına açıldığını kontrol edin.
2. Cal.com > Bağlantılar bölümünde her etkinliğin "Her zaman onay iste" ayarını doğrulayın.
3. Tüm masaj türleri aynı terapist ve aynı Google Takvim çakışma kontrolünü kullanmalıdır.
4. Yüz Masajı (40 dk) ve Transbuccal (50 dk) için önizlemede yalnız 10:00, 12:00, 14:00, 16:00, 18:00 ve 20:00 başlangıçlarının çıktığını **ayrıca doğrulayın**; gerekirse 120 dakikalık başlangıç aralığı ayarlayın.
5. Gerçek randevu vermeden önce test talebi gönderip onay ve çakışma kontrolünü sınayın.
6. URL'ler Cal.com kullanıcı adı, slugs değişirse script.js > services[].calLink alanından güncellenmelidir.

## Bu sürümün kapsamı

Cal.com entegrasyonu için Railway/veritabanı/API anahtarı gerekmez. Ücretler bilgilendirme amaçlıdır; online ödeme etkinleştirilmemiştir.
