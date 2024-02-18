const date = new Date("Mar 7, 2024 12:00:00");

export default function ComingSoon() {
    <section>
            <div class="mt-1">
                <div class="bg-slate-400">{date.getDay()}</div>
                <div class="bg-slate-400">{date.getHours()}</div>
                <div class="bg-slate-400">{date.getMinutes()} year</div>
                <div class="bg-slate-400">{date.getFullYear()} year</div>
            </div>
    </section>
}