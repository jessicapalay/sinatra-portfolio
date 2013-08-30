require "sinatra"
require "pony"

Pony.options = { 
	:via => :smtp, 
	:via_options => { 
 	 :address        => "smtp.sendgrid.net",
 	 :port           => 587,
 	 :authentication => :plain,
 	 :user_name      => ENV['SENDGRID_USERNAME'], 
 	 :password       => ENV['SENDGRID_PASSWORD'],
 	 :domain         => "heroku.com",
 	 :enable_starttls_auto => true
	}
}

get "/" do
	erb :index
end

post "/emails" do
  Pony.mail(to: "jessica.c.palay@gmail.com", subject: "Message from: #{params[:name]}", from: params[:email], body: params[:message])
  redirect "/"
end