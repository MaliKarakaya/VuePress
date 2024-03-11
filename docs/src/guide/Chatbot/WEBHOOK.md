# Web Kancaları (Webhooks)
<div style="border-bottom: 10px solid #fe6244; padding: 0px;">
</div>

***

- Web kancaları (webhooks) konusu oldukça önemli ve yararlı bir konudur. Web kancaları, bir web sitesinin bir uygulamaya
  veri göndermesine ve uygulamanın da bu verileri işlemesine olanak tanıyan bir API türüdür. Bu, web siteleri ve
  uygulamalar arasında bilgi alışverişinin hızlı ve kolay bir şekilde yapılabilmesini sağlar. Bir web hizmetinde
  gerçekleşen bir olayı (event) takip eder ve bu olay gerçekleştiğinde belirli bir <b>URL'ye HTTP POST</b> isteği
  gönderir. Bu istek, alıcı tarafından alınır ve işlenir.
- Web kancaları, birçok farklı amaç için kullanılabilir. Örneğin, bir chatbot uygulaması, bir web kancası kullanarak bir
  web hizmetiyle sohbet bilgilerini kolaylıkla paylaşabilir. Böylece chatbot'un aldığı veriler, hemen işlenebilir ve
  kullanılabilir.
- Web kancaları, bir uygulama veya web sitesi üzerinde gerçekleşen belirli bir olayın (örneğin bir kullanıcının
  kaydolması veya bir mesajın gönderilmesi gibi) tespit edilmesi durumunda, diğer bir uygulamaya veya web hizmetine bir
  istek gönderir. Bu istek, belirli bir formatta (genellikle JSON veya XML) veri içerir ve hedef uygulama veya hizmet
  tarafından işlenebilir.

<b>ChatBotlar ve diğer web hizmetleri arasında sohbet bilgilerini aktarmak için web kancaları oldukça yararlıdır.
Örneğin, bir chatbot kullanıcının mesajını aldığında, bu mesajı bir hizmete göndererek, hizmetin o mesaja cevap
vermesini sağlayabilirsiniz. Bu sayede, chatbot ile kullanıcı arasındaki iletişim daha hızlı ve akıcı hale gelir.</b>

- Web kancaları ayrıca, iş akışlarını otomatikleştirmek için de kullanılabilir. Bir chatbot kullanıcının mesajını
  aldığında, bir web kancası sayesinde bu mesaj otomatik olarak bir web hizmetine iletilir ve orada işlenir. Bu sayede,
  chatbot ve web hizmeti arasında manuel olarak veri paylaşımı yapmak yerine, işlemler otomatik olarak gerçekleştirilir
  ve daha hızlı sonuç alınır.

<b>İsterseniz hemen deneme aşamasına geçelim. Böylelikle daha iyi anlamış olacaksınız.</b>

- Öncelikle bir web hook adresi alıyoruz ve daha sonra entegrasyonlar kısmındaki webhook alanından bir adet webhook
  oluşturup aldığım url adresini oraya yapıştırıyoruz. Bu botunuzla konuşan kişinin konuşmalarını belirttiğiniz adrese
  düşmesine olanak sağlayacaktır. Daha sonra senaryonuzda webhook'u sürükleyip bırakın ve üstüne basıp url koyduğunuz
  webhook'u seçin. Tüm işlem bu kadar. Bundan sonra tüm konuşmalar panelinize düşecektir.

<video width="100%" height="100%" controls>
  <source src="https://static.supsis.live/common/doc.supsis.live/webhook.mp4" type="video/mp4">
</video>